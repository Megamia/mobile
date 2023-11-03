import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Screen1 from '../Motinor/Screen1';
import Screen2 from '../Discover/Screen2';
import Screen3 from '../Browser/Screen3';

const Bot = () => {
  const [currentScreen, setCurrentScreen] = useState('Screen1');

  const handleSwitchScreen1 = () => {
    setCurrentScreen('Screen1');
  };

  const handleSwitchScreen2 = () => {
    setCurrentScreen('Screen2');
  };

  const handleSwitchScreen3 = () => {
    setCurrentScreen('Screen3');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Screen1' ? (
        <Screen1 />
      ) : currentScreen === 'Screen2' ? (
        <Screen2 />
      ) : (
        <Screen3 />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSwitchScreen1}>
        <Text style={styles.buttonText}>Switch to Screen1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSwitchScreen2}>
        <Text style={styles.buttonText}>Switch to Screen2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSwitchScreen3}>
        <Text style={styles.buttonText}>Switch to Screen3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bot;