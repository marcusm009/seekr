import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import ToCameraButton from '../components/ToCameraButton';

export default class Hunt extends React.Component {

  //TODO: overlay text and button correctly on image
  render() {
    return (
      <ImageBackground source={this.props.huntImg} style =
      {{width: '100%', height: '100%'}}>
        <View style = {{ backgroundColor: 'transparent',
        alignItems: 'center', justifyContent: 'flex-start'}}>
        <Text style={styles.titleText}> You&#39;re close! Seek some perspective... </Text>
        </View>
        <View style = {{ backgroundColor: 'transparent',
      alignItems: 'center', position: 'absolute', bottom: 10,}}>
        <ToCameraButton goToCamera={this.props.goToCamera}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Manifesto',
  },
  titleText: {
    fontSize: 20,
  },
});
