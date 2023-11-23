import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NavTOP from '../Home/NavTOP';
import { Entypo } from '@expo/vector-icons';

const Discover = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <ScrollView horizontal>
        <TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Game</Text>
            <View style={styles.viewicon}>
              <Entypo name="game-controller" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Esports</Text>
            <View style={styles.viewicon}>
              <Entypo name="game-controller" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Nhạc</Text>
            <View style={styles.viewicon}>
              <Entypo name="game-controller" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Người thực hiện</Text>
            <View style={styles.viewicon}>
              <Entypo name="game-controller" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Creative</Text>
            <View style={styles.viewicon}>
              <Entypo name="game-controller" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
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
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
    marginRight:10
  },
  view: {
    backgroundColor: '#782CE8',
    marginRight: 10,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  viewicon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Discover;