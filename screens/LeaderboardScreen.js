import React, { Component } from 'react';
import { AppRegistry, FlatList, Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

var players = require('../assets/json/players.json');
// for(var i; i < players.playerList.length; i++) {
//   dispData.push(players.playerList[i]);
// }
console.log(players.playerList);

export default class LeaderboardScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Player                         Score</Text>
        <FlatList style={styles.list}
          numColumns={1}
          data={players.playerList}
          keyExtractor={(item,index)=>item.user}
          renderItem={({item}) =>
          <Text style={styles.item}>{item.user}                           {item.score}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#fff',
    height: 130
  },
  label: {
    fontSize: 32,
    margin: 5,
    color: '#686868'
  },
  list: {
  },
  item: {
    fontSize: 32,
    margin: 5
  }
});
