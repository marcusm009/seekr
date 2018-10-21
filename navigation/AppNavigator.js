import React from 'react';
import { createSwitchNavigator, createStackNavigator,
  createDrawerNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import MainTabNavigator from './MainTabNavigator';

export default AppStackNavigator = createStackNavigator({
  TabNavigator: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    }
  }
})
