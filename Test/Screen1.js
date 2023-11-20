import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
      <Text style={styles.main}>This is Screen 1</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
  },
  main:{
    flex: 1,
  }
});

export default Screen1;