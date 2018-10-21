import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';

export default class ToCameraButton extends React.Component {


  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }} >
        <TouchableOpacity
          onPress={this.props.goToCamera()}
          style={{ alignSelf: 'center' }} >
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
