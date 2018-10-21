import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

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
          <Image source={this.props.huntImg}/>
        </TouchableOpacity>
      </View>
    );
  }
}
