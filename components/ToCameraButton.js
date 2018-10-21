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
        <TouchableOpacity
          onPress={this.props.goToCamera}
          style={{ alignItems: 'center', justifyContent: 'center'  }} >
          <Ionicons name="ios-arrow-up" size={70} color="white" />
        </TouchableOpacity>
    );
  }
}
