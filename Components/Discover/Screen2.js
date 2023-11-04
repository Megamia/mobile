import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <View style={styles.content}>
        <Text>This is Screen 2</Text>
        {/* Các thành phần khác trong màn hình */}
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

export default Screen2;