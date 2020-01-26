/**
 * Author: Vidush H. Namah (2019)
 * Playlist Screen
*/

import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

import Themes from '../constants/Themes';
import { Actions } from '../reducers/playlist';
import { ListItem } from '../components/Playlist/ListItem';
import { Header } from '../components/Playlist/Header';
import Navigator from '../navigation/Navigator';

class RootUI extends React.Component {
    render() {
        return(
            <View style={STYLES.container}>
                <Navigator />
                {
                    this.props.ShowPlayer &&
                    <View style={STYLES.player}>
                        <Text style={STYLES.white}>LACK OF TIME BUT - PLAYER SHOULD APPEAR HERE!</Text>
                        {
                            this.props.IsPlaying &&
                            <Image style={{width: 30, height: 30}}
                                source={require('../../assets/images/play.png')} />
                        }
                        {
                            !this.props.IsPlaying &&
                            <Image style={{width: 30, height: 30}}
                                source={require('../../assets/images/pause.png')} />
                        }
                    </View>
                }
            </View>
        )
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.DarkTheme.Background,
        color: Themes.DarkTheme.Light
    },
    white: {
        color: '#000000',
        flex: 1
    },
    player: {
        height: 50,
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    }
  });
  

const mapStateToProps = (store) => ({
    ShowPlayer: store.PlayerState.Status,
    IsPlaying: store.PlayerState.Playing
});

const mapActionsToProps = (dispatch) => ({

});

export default Root = connect(mapStateToProps, mapActionsToProps)(RootUI);