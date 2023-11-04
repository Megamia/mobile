import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import Screen1 from '../Motinor/Screen1';
import Screen2 from '../Discover/Screen2';
import Screen3 from '../Browser/Screen3';
import Search from '../Search/Search';

const Bot = () => {
  const [selectedButton, setSelectedButton] = useState('Screen1');

  const handlePress = (screen) => {
    setSelectedButton(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewnav}>
        <View style={styles.viewclick}>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'Screen1' && styles.clickedButton]}
            onPress={() => handlePress('Screen1')}
          >
            <FontAwesome5
              name="heart"
              size={24}
              color={selectedButton === 'Screen1' ? '#C193FF' : 'white'}
            />
            <Text style={[styles.buttonText, { color: selectedButton === 'Screen1' ? '#C193FF' : 'white' }]}>
              Theo dõi
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'Screen2' && styles.clickedButton]}
            onPress={() => handlePress('Screen2')}
          >
            <FontAwesome5
              name="compass"
              size={24}
              color={selectedButton === 'Screen2' ? '#C193FF' : 'white'}
            />
            <Text style={[styles.buttonText, { color: selectedButton === 'Screen2' ? '#C193FF' : 'white' }]}>
              Khám phá
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'Screen3' && styles.clickedButton]}
            onPress={() => handlePress('Screen3')}
          >
            <MaterialIcons
              name="content-copy"
              size={24}
              color={selectedButton === 'Screen3' ? '#C193FF' : 'white'}
            />
            <Text style={[styles.buttonText, { color: selectedButton === 'Screen3' ? '#C193FF' : 'white' }]}>
              Duyệt
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewclick}>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'Search' && styles.clickedButton]}
            onPress={() => handlePress('Search')}
          >
            <Feather
              name="search"
              size={24}
              color={selectedButton === 'Search' ? '#C193FF' : 'white'}
            />
            <Text style={[styles.buttonText, { color: selectedButton === 'Search' ? '#C193FF' : 'white' }]}>
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
    marginTop: 35,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  show: {

  },
  viewnav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 30,
  },
  viewclick: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
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