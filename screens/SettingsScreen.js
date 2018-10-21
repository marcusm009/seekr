import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Font } from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Seekr',
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: '32'
      fontFamily: '../assets/fonts/MANIFESTO.ttf'
    },
  };

  render() {
    return (
      <SafeAreaView>
        <View style = {{height: 150, backgroundColor: 'white',
          alignItems: 'center', justifyContent: 'center' }}>
          <Image source = {require('../assets/images/GTLogo.png')} style = {{
          height: 120, width: 120, borderRadius: 60
        } }/>
        </View>
        <ScrollView style = {{backgroundColor: 'white'}}>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
