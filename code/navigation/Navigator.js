/**
 * Author: Vidush H. Namah (2019)
 * 
 * Creates Navigation Stack for the entire application
 * All screens supporting navigation should be linked via
 * a key here.
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FeaturedPage from '../screens/Featured';

const NavigationStack = createStackNavigator(
  {
    Featured: {
      screen: FeaturedPage
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
      }
    }
  }
);

export default Navigator = createAppContainer(NavigationStack);