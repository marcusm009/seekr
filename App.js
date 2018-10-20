import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
import { createDrawerNavigator } from 'react-navigation'

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export class Home extends React.Component {
  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 33.74825,
          longitude: -84.3880,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
  )};
}

export class Leaderboard extends React.Component {
  render() {
    return (
      <Text> "Waz up" </Text>
    )
  };
}

export class Settings extends React.Component {
  render() {
    return (
      <Text> "Waz up" </Text>
    )
  }
}

export class createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name = "ios-home" color = {tintColor} size = {24} />
      )
    }
  },
  Leaderboard: Leaderboard,
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name = "ios-settings" color = {tintColor} size = {24} />
      )
    }
  }
}, {
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey'
  }
})

export default createDrawerNavigator
