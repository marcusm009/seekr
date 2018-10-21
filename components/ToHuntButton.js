import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

export default class ToHuntButton extends React.Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          padding: 20,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        }} >
        <TouchableOpacity
          onPress={this.props.goToHunt}>
          <Image source={this.props.huntImg}/>
        </TouchableOpacity>
      </View>
    );
  }
}
