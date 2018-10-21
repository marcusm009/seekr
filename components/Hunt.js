import React, { Component } from 'react'; 
import {
  Image,
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
      <View style = {{ flex: 1 }}>
        <Text style={styles.titleText}> You&#39;re close! Seek some perspective... </Text>
        <ToCameraButton goToCamera={this.props.goToCamera}/>
        <Image source={this.props.huntImg}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
