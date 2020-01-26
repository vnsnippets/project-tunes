/**
 * Author: Vidush H. Namah (2019)
 * Featured Screen
*/

import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  RefreshControl,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import Themes from '../constants/Themes';
import { Actions } from '../reducers/featured';

import { ListItem } from '../components/Featured/ListItem';

export class FeaturedUI extends React.Component {

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
    if (!this.props.Data.message)
    {
      return (
        <View style={STYLES.center}>
          <Text style={STYLES.text}>Loading featured playlists...</Text>
        </View>
      )
    } 
    
    else {
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
              renderItem={({ item }) => 
                <ListItem 
                  key={item.id} 
                  style={STYLES.item}
                  Action={() => this.props.navigation.navigate('Playlist', { 
                    PlaylistId: item.id,
                    Image: item.images[0].url,
                    Owner: item.owner["display_name"],
                    Name: item.name
                  })}
                  Image={item.images[0].url} 
                />
              }
            />
          }
        </View>
      );
    }
  }
}

const STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Themes.DarkTheme.Background,
    padding: 15,
    paddingTop: 40
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
  },
  center: {
    flex: 1,
    backgroundColor: Themes.DarkTheme.Background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#FFFFFF"
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