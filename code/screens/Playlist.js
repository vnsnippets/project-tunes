/**
 * Author: Vidush H. Namah (2019)
 * Playlist Screen
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
import { Actions } from '../reducers/playlist';
import { ListItem } from '../components/Playlist/ListItem';
import { Header } from '../components/Playlist/Header';

export class PlaylistUI extends React.Component {
    
    componentDidMount() {
        ID = this.props.navigation.getParam('PlaylistId');
        this.props.RefreshPlaylist(ID);
    }

    componentDidUpdate() {
        if (this.props.Error) {
            Alert.alert(
                this.props.Error.Title,
                this.props.Error.Message,
                [
                    {
                        text: 'TRY AGAIN',
                        onPress: () => this.props.RefreshPlaylist(this.props.navigation.getParam('PlaylistId'))
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

    componentWillUnmount() { 
        this.props.ClearSelection();
    }

    render() {
        if (this.props.Data != {})
        {
            return (
                <View style={STYLES.wrapper}>
                    <View>
                       <Header Data={{
                            Image: this.props.navigation.getParam('Image'),
                            Owner: this.props.navigation.getParam('Owner'),
                            Title: this.props.navigation.getParam('Name'),
                            Followers: this.props.Data.followers.total,
                            Description: this.props.Data.description
                        }}></Header> 
                    </View>
                    
                    {
                        this.props.Data.tracks != {} &&

                        <View style={STYLES.list}>
                            <FlatList
                                data={this.props.Data.tracks.items}
                                keyExtractor={(item) => item.track.id}
                                renderItem={(item) => 
                                    <ListItem 
                                        Item={item.item}
                                        Title={item.item.track.name}
                                        Subtitle={item.item.track.album.artists[0].name}
                                        Preview={item.item.track["preview_url"]}
                                        PlayAudio={() => this.props.LoadAudioFile({
                                            Name: item.item.track.name,
                                            Preview: item.item.track["preview_url"]
                                        })}
                                    >
                                    </ListItem>
                                }
                            />
                        </View>
                    }

                </View>
            );
        }
    }
}

const STYLES = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: Themes.DarkTheme.Background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
        backgroundColor: Themes.DarkTheme.Background,
        padding: 15,
        paddingTop: 30
    },
    title: {
        fontSize: 28,
        color: Themes.DarkTheme.Text,
        padding: 7.5,
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        color: '#FFFFFF'
    },
    list: {
        flex: 1,
        flexDirection: 'column'
    }
});

const mapStateToProps = (store) => ({
    Data: store.PlaylistState.Data,
    Loading: store.PlaylistState.Loading,
    Error: store.PlaylistState.Error
});

const mapActionsToProps = (dispatch) => ({
    RefreshPlaylist: (payload) => dispatch(Actions.AsyncRefreshPlaylist(payload)),
    ClearSelection: () => dispatch(Actions.ClearSelection()),
    LoadAudioFile: (payload) => dispatch(Actions.LoadAudioFile(payload))
});

export default PlaylistPage = connect(mapStateToProps, mapActionsToProps)(PlaylistUI);