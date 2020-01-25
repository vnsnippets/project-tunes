/**
 * Author: Vidush H. Namah (2020)
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import Themes from '../../constants/Themes';

export const ListItem = (props) => {
  console.log(props.URI)
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={0.75}>
      <Image
        style={{width: 150, height: 150}}
        source={{uri: props.data.URI}} />
    </TouchableOpacity>
  )
}