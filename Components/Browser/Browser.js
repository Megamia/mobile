import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Top from '../Home/Top';

const Browser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Top />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.text}>Screen Duyệt</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
  },
  top: {
    height: 85,
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