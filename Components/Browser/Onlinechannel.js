import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavTOP2 from '../Home/NavTOP2';

const Onlinechannel = () => {
  return (
    <View style={styles.container}>
        <NavTOP2/>
      <Text style={styles.text}>Hello, Expo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Onlinechannel;