import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Screen1 from '../Motinor/Screen1';
import Screen2 from '../Discover/Screen2';
import Screen3 from '../Browser/Screen3';
import Search from '../Search/Search';

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

  const handleSwitchScreen4 = () => {
    setCurrentScreen('Search');
  };

  return (
    <View style={styles.container}>
      <View style={styles.show}>
        {currentScreen === 'Screen1' ? (
          <Screen1 />
        ) : currentScreen === 'Screen2' ? (
          <Screen2 />
        ) : currentScreen === 'Screen3' ? (
          <Screen3 />
        ) : (
          <Search />
        )}
      </View>
      <View style={styles.viewnav}>
        <View style={styles.viewclick}>
          <TouchableOpacity style={styles.button} onPress={handleSwitchScreen1}>
            <AntDesign name="heart" size={24} color="white" />
            <Text style={styles.buttonText}>Screen1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity style={styles.button} onPress={handleSwitchScreen2}>
            <AntDesign name="heart" size={24} color="white" />
            <Text style={styles.buttonText}>creen2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity style={styles.button} onPress={handleSwitchScreen3}>
            <AntDesign name="heart" size={24} color="white" />
            <Text style={styles.buttonText}>Screen3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity style={styles.button} onPress={handleSwitchScreen4}>
            <AntDesign name="heart" size={24} color="white" />
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewnav: {
    flexDirection:'row',
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