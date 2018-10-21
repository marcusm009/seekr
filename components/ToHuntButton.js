import React, { Component } from 'react';
import { View, Image, View, TouchableOpacity } from 'react-native';

export class SuccessMessage extends React.Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }} >
        <TouchableOpacity
          onPress={this.props.goToHunt()}
          style={{ alignSelf: 'center' }} >
          <Image source={require({this.props.huntImgSrc})}/>
        </TouchableOpacity>
      </View>
    );
  }
}
