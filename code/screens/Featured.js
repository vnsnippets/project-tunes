/**
 * Author: Vidush H. Namah (2019)
 * Featured Screen
*/

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import Themes from '../constants/Themes';
import { Actions } from '../reducers/featured';

import { ListItem } from '../components/Featured/ListItem';

export class FeaturedUI extends React.Component {
  // renderFeaturedList = () => {
  //     UIElements = [];
  //     Data = this.props.Data;

  //     if (Data)
  //     {
  //         Data.playlists.items.map((item) => {
  //             UIElements.push(
  //                 <View key={item.id}>
  //                     <Text style={STYLES.item}>{item.name}</Text>
  //                 </View>
  //             )
  //         });
  //     }

  //     return UIElements;
  // }

  // componentDidMount() {
  //   this.props.RefreshData();
  // }

  componentDidMount() {
    this.props.RefreshData();
  }

  componentDidUpdate() {
    if (this.props.Error) {
      Alert.alert(
        this.props.Error.Title,
        this.props.Error.Message,
        [
          {
            text: 'TRY AGAIN',
            onPress: () => this.props.RefreshData()
          },
          {
            text: 'CANCEL',
            onPress: () => { }
          }
        ],
        { cancelable: true }
      )
    }
  }

  render() {
    return (
      <View style={STYLES.wrapper}>
        <Text style={STYLES.title}>{this.props.Data.message}</Text>

        {
          this.props.Data &&
          this.props.Data.playlists &&
          this.props.Data.playlists.items &&

          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.props.Loading}
                onRefresh={this.props.RefreshData} />
            }
            numColumns={2}
            data={this.props.Data.playlists.items}
            renderItem={({ item }) => <ListItem style={STYLES.item} data={{
              URI:item.images[0].url
            }} />}
          />
        }
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Themes.DarkTheme.Background,
    padding: 15
  },
  title: {
    fontSize: 28,
    color: Themes.DarkTheme.Text,
    padding: 7.5,
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    padding: 7.5
  }
});

const mapStateToProps = (store) => ({
  Data: store.FeaturedState.Data,
  Loading: store.FeaturedState.Loading,
  Error: store.FeaturedState.Error
});

const mapActionsToProps = (dispatch) => ({
  RefreshData: () => dispatch(Actions.AsyncRefreshList())
});

export default FeaturedPage = connect(mapStateToProps, mapActionsToProps)(FeaturedUI);