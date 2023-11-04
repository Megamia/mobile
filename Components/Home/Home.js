import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Top from './Top';
import Bot from './Bot';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Top style={styles.top}/>
      </View>
      <Bot style={styles.bot}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10'
  },
  topWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  bot: {
    // position: 'absolute',
  },
});

export default Home;