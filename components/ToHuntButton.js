import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ToHuntButton extends React.Component {

  render() {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          height: 150,
          width: 150,
          borderRadius: 75,
          position: 'absolute',
          bottom: 60,
          left: 10,
        }} >
        <TouchableOpacity
          onPress={this.props.goToHunt}>
          <Image source={this.props.huntImg} style =
          { styles.buttonSize}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonSize: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
})
