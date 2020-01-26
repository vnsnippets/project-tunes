import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { default as ConfigureStore } from './code/reducers/Store';
import Themes from './code/constants/Themes';
import Navigator from './code/navigation/Navigator';
import Root from './code/screens/Root';

const Store = ConfigureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <View style={STYLES.container}>
          <StatusBar barStyle='light-content' translucent backgroundColor={Themes.DarkTheme.StatusBar} />
          <Root></Root>
        </View>
      </Provider>
    );
  }
}

const STYLES = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: Themes.DarkTheme.Background,
      color: Themes.DarkTheme.Light
  }
});