import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đừng sang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // position:'relative',
    // bottom:0
  },
  text:{
    // fontSize: 30,
    // color:'red'
  }
})
export default Screen1;