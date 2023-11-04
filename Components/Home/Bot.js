import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
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

  const [clickedButton, setClickedButton] = useState('');

  const handlePress = (buttonName) => {
    setClickedButton(buttonName);
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
            <TouchableOpacity style={[styles.button, clickedButton === 'Screen1' && styles.clickedButton]} onPress={() => { handlePress('Screen1'); handleSwitchScreen1(); }}>
              <FontAwesome5 name="heart" size={24} color={clickedButton === 'Screen1' ? '#C193FF' : 'white'} solid={clickedButton === 'Screen1'} />
              <Text style={[styles.buttonText, { color: clickedButton === 'Screen1' ? '#C193FF' : 'white' }]}>
                Theo dõi
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewclick}>
            <TouchableOpacity style={[styles.button, clickedButton === 'Screen2' && styles.clickedButton]} onPress={() => { handlePress('Screen2'); handleSwitchScreen2(); }}>
              <FontAwesome5 name="compass" size={24} color={clickedButton === 'Screen2' ? '#C193FF' : 'white'} solid={clickedButton === 'Screen2'} />
              <Text style={[styles.buttonText, { color: clickedButton === 'Screen2' ? '#C193FF' : 'white' }]}>
                Khám phá
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewclick}>
            <TouchableOpacity style={[styles.button, clickedButton === 'Screen3' && styles.clickedButton]} onPress={() => { handlePress('Screen3'); handleSwitchScreen3(); }}>
              <MaterialIcons name="content-copy" size={24} color={clickedButton === 'Screen3' ? '#C193FF' : 'white'} solid={clickedButton === 'Screen3'} />
              <Text style={[styles.buttonText, { color: clickedButton === 'Screen3' ? '#C193FF' : 'white' }]}>
                Duyệt
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewclick}>
            <TouchableOpacity style={[styles.button, clickedButton === 'Search' && styles.clickedButton]} onPress={() => { handlePress('Search'); handleSwitchScreen4(); }}>
              <Feather name="search" size={24} color={clickedButton === 'Search' ? '#C193FF' : 'white'} solid={clickedButton === 'Search'} />
              <Text style={[styles.buttonText, { color: clickedButton === 'Search' ? '#C193FF' : 'white' }]}>
                Tìm kiếm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  show: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    backgroundColor:'red'
  },
  viewnav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom:30,
  },
  viewclick: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'blue',
    // padding: 10,
    // borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bot;