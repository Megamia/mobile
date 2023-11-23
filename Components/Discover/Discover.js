import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import NavTOP from '../Home/NavTOP';
import { FontAwesome  } from '@expo/vector-icons';

const Discover = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert('Thông báo', 'Chưa làm');
  };
  const listtheme = [
    { id: 1, icon: 'gamepad', name: 'Game' },
    { id: 2, icon: 'trophy', name: 'Esports' },
    { id: 3, icon: 'music', name: 'Nhạc' },
    { id: 4, icon: 'microphone', name: 'Người thực hiện' },
    { id: 5, icon: 'pencil-square-o', name: 'Creative'},
  ];
  const renderlisttheme = ({ item }) => (
    <TouchableOpacity onPress={handlePress} >
      <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <View style={styles.viewicon}>
              <FontAwesome name={item.icon} style={styles.icon} />
            </View>
          </View>
        </TouchableOpacity>
  );

  const listchannel = [
    { id: 1, icon: 'gamepad', name: 'Game' },
    { id: 2, icon: 'trophy', name: 'Esports' },
    { id: 3, icon: 'music', name: 'Nhạc' },
    { id: 4, icon: 'microphone', name: 'Người thực hiện' },
    { id: 5, icon: 'pencil-square-o', name: 'Creative'},
  ];
  const renderlistchannel = ({ item }) => (
    <TouchableOpacity onPress={handlePress} >
      <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <View style={styles.viewicon}>
              <FontAwesome name={item.icon} style={styles.icon} />
            </View>
          </View>
        </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <ScrollView>
      <FlatList horizontal style={styles.FlatList1}
              data={listtheme}
              renderItem={renderlisttheme}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
      />
      <View style={styles.titleview}>
        <Text style={styles.titletext}>Các kênh trực tiếp chúng tôi nghĩ bạn sẽ thích</Text>
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
  text: {
    fontSize: 22,
    color: 'white',
    width: 100,
  },
  view: {
    backgroundColor: '#782CE8',
    flexDirection: 'row',
    width:150,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 15,
  },
  viewicon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList1: {
    marginVertical: 10,
    marginLeft: 15,
  },
  icon:{
    fontSize: 24,
    color: 'white',
  },
  titleview:{
    margin: 15,
  },
  titletext:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'

  }
});

export default Discover;