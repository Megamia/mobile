import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavTOP from '../../Home/NavTOP';
import NavTOP2 from './NavTOP2';

const Browser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <View style={styles.top1}>
        <NavTOP2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0E0E10',
  },
  top: {
    height: 85,
    // backgroundColor: 'red',
    zIndex: 1,
  },
  top1: {
    backgroundColor: 'white',
    top: 90,
    position: 'absolute', 
    zIndex: 2,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginTop: 20,
  },
  content: {
    padding: 20,
  },
});

export default Browser;