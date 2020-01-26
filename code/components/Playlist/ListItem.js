/**
 * Author: Vidush H. Namah (2020)
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Themes from '../../constants/Themes';

export const ListItem = (props) => {
    if (!props.Preview) {
        return (
            <View style={STYLES.wrapper}>
                <Text style={[STYLES.muted, STYLES.title]}>{props.Title}</Text>
                <Text style={STYLES.muted}>{props.Subtitle}</Text>
            </View>
        )
    }

    else {
        return (
            <View style={STYLES.wrapper}>
                <TouchableOpacity
                    onPress={props.PlayAudio}
                    activeOpacity={0.75}>
                    <Text style={[STYLES.title, STYLES.white]}>{props.Title}</Text>
                    <Text style={STYLES.subtitle}>{props.Subtitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const STYLES = StyleSheet.create({
    wrapper: {
        padding: 7.5,
        paddingBottom: 12
    },
    muted: {
        color: '#AAAAAA'
    },
    title: {
        fontSize: 16
    },
    white: {
        color: '#FFFFFF'
    },
    subtitle: {
        color: '#DDDDDD'
    }
});