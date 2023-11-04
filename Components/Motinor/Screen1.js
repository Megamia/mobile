import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text>This is Screen 1</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
    alignSelf: 'center',
  },
  content: {
    padding: 20,
  },
});

export default Screen1;