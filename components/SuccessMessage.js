import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class SuccessMessage extends React.Component {
  
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <Text style={styles.titleText}> Good Job! </Text>
        <Text style={styles.baseText}> You've completed the challenge. Here's what the creator has to say: </Text>
        <Text style={styles.baseText}> { this.props.creatorMessage } </Text>
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
