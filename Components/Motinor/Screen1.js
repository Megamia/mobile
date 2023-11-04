import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.a}>
        <View style={styles.b}>

        </View>
        <Text style={styles.text}>abc</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    position:'absolute',
    top:0,
    // bottom:0
  },
  text:{
    fontSize: 30,
    color:'white'
  },
  a:{
    height:3000,
    backgroundColor:'blue'
  },
  b:{
    height:50,
    backgroundColor:'red'
  }
})
export default Screen1;