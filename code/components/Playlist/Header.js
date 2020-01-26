/**
 * Author: Vidush H. Namah (2020)
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Themes from '../../constants/Themes';

export const Header = (props) => {
  return (
    <View style={STYLES.wrapper}>
        {
            <Image style={STYLES.cover}
                source={{uri: props.Data.Image}}>
            </Image>
        }

        <View style={STYLES.details}>
            <Text style={STYLES.title}>{props.Data.Title}</Text>
            { props.Data.Owner && <Text style={[STYLES.subtitle, STYLES.padBottom]}>{props.Data.Owner}</Text> }

            <Text style={STYLES.text}>{props.Data.Description}</Text>
            { props.Data.Followers && <Text style={STYLES.subtitle}>{props.Data.Followers} Followers</Text> }
        </View>
    </View>
  )
}
const STYLES = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
    },
    subtitle: {
        color: '#AFAFAF'
    },
    text: {
        color: '#FFFFFF',
        flexWrap: 'wrap'
    },
    cover: {
        width: 125, height: 125,
    },
    details: {
        flex:1,
        margin: 15
    },
    padBottom: {
        paddingBottom: 15
    }
});