<<<<<<< HEAD
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
=======
import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset, Font, Icon, MapView } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
>>>>>>> ec98b849088c13eb8a24314387007460caffc041
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

<<<<<<< HEAD
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
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
>>>>>>> ec98b849088c13eb8a24314387007460caffc041
