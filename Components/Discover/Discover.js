import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import NavTOP from '../Home/NavTOP';
import { FontAwesome } from '@expo/vector-icons';

const Discover = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert('Thông báo', 'Chưa làm');
  };
  const listtheme = [
    { id: 1, icon: 'gamepad', name: 'Game' },
    { id: 2, icon: 'trophy', name: 'Esports' },
    { id: 3, icon: 'music', name: 'Nhạc' },
    { id: 4, icon: 'microphone', name: 'Người thực hiện' },
    { id: 5, icon: 'pencil-square-o', name: 'Creative' },
  ];

  const listchannel = [
    { id: 1, userimg: require('../../assets/img/tenha-user.png'), username: 'Tenha', video: require('../../assets/gif/honkai-star-rail-combat-system-8.gif') },
    { id: 2, userimg: require('../../assets/img/maichuxo-user.png'), nausernameme: 'maichuxo', video: require('../../assets/gif/minecraft.gif') },
    { id: 3, userimg: require('../../assets/img/Ayellol-user.png'), username: 'Ayellol', video: require('../../assets/gif/lol-lesin.gif') },
    { id: 4, userimg: require('../../assets/img/ProfessionalPridER.png'), username: 'ProfessionalPridER', video: require('../../assets/gif/genshincombat.gif') },
  ];
  const renderlistchannel = ({ item }) => (
    <View style={styles.streamchannel}>
      <View>
        <Image
          source={item.video}
          style={styles.videostream}
          resizeMode="cover"
        />
        <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
        <View style={styles.viewers}><Text style={styles.viewerstext}>4.490 người xem</Text></View>
      </View>
      <View style={styles.detail}>
        <Image
          source={item.userimg}
          style={styles.imguser}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.content}>HSR Genshin dailies and OW after</Text>
          <Text style={styles.category}>Honkai: Star Rail</Text>
          <View style={styles.tag}>
            <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
            <View style={styles.tagbox}><Text style={styles.tagtext}>Anime</Text></View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <ScrollView style={styles.ScrollView}>
        <ScrollView horizontal style={styles.ScrollView1} showsHorizontalScrollIndicator={false}>
        <View style={styles.viewbegin}/>
          {listtheme.map((item) => (
            <TouchableOpacity key={item.id} onPress={handlePress}>
              <View style={styles.view}>
                <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                  {item.name}
                </Text>
                <View style={styles.viewicon}>
                  <FontAwesome name={item.icon} style={styles.icon} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.titleview}>
          <Text style={styles.titletext}>Các kênh trực tiếp chúng tôi nghĩ bạn sẽ thích</Text>
        </View>
        <ScrollView horizontal style={styles.ScrollView1} showsHorizontalScrollIndicator={false}>
        <View style={styles.viewbegin}/>
          {listchannel.map((item) => (
             <View style={styles.streamchannel}>
             <View>
               <Image
                 source={item.video}
                 style={styles.videostream}
                 resizeMode="cover"
               />
               <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
               <View style={styles.viewers}><Text style={styles.viewerstext}>4.490 người xem</Text></View>
             </View>
             <View style={styles.detail}>
               <Image
                 source={item.userimg}
                 style={styles.imguser}
                 resizeMode="cover"
               />
               <View>
                 <Text style={styles.username}>{item.username}</Text>
                 <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">HSR Genshin dailies and OW after</Text>
                 <Text style={styles.category}>Honkai: Star Rail</Text>
                 <View style={styles.tag}>
                   <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
                   <View style={styles.tagbox}><Text style={styles.tagtext}>Anime</Text></View>
                 </View>
               </View>
             </View>
           </View>
          ))}
        </ScrollView>
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
    width: 170,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 5,
    marginRight: 15,
  },
  viewicon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollView1: {
    marginVertical: 10,
  },
  viewbegin:{
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
  titleview: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  titletext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  streamchannel:
  {
    paddingBottom: 12,
    paddingRight :15,
  },
  videostream: {
    width: 390 * 0.7,
    height: 220 * 0.7,
    objectFit: 'cover',
  },
  streambox: {
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    top: 7,
    left: 7,
  },
  streamtextbox: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  viewers: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    position: 'absolute',
    bottom: 7,
    left: 7,
  },
  viewerstext: {
    color: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  detail: {
    paddingTop: 7,
    paddingRight: 15,
    flexDirection: 'row',
  },
  imguser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 7,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  content: {
    color: '#A8A7B0',
    fontSize: 18,
    paddingBottom: 2,
    width: 200
  },
  category: {
    color: '#A8A7B0',
    fontSize: 18,
    paddingBottom: 5,
  },
});

export default Discover;