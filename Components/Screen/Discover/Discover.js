import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import NavTOP from '../../Home/NavTOP';

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
    { id: 1, userimg: require('../../../assets/img/tenha-user.png'), username: 'Tenha', video: require('../../../assets/gif/honkai-star-rail-combat-system-8.gif'),category: 'Honkai: Star Rail', content: 'HSR Genshin dailies and OW after', countview: '4.490' },
    { id: 2, userimg: require('../../../assets/img/maichuxo-user.png'), username: 'maichuxo', video: require('../../../assets/gif/minecraft.gif'),category: 'Minecraft', content: 'play minecraft with maichuxo and sing', countview: '1.690' },
    { id: 3, userimg: require('../../../assets/img/Ayellol-user.png'), username: 'Ayellol', video: require('../../../assets/gif/lol-lesin.gif'),category: 'League of Legends', content: '[DIA 16] AYEL KOREA ARC BOOTCA...', countview: '8.566' },
    { id: 4, userimg: require('../../../assets/img/ProfessionalPridER.png'), username: 'ProfessionalPridER', video: require('../../../assets/gif/genshincombat.gif'),category: 'Genshin Impact', content: 'Under the tree-eee-eee | !yt !disco...', countview: '3.449' },
  ];

  const listcategory = [
    { id: 1, image: require('../../../assets/img/danhmuc/genshin.jpg'), name: 'Genshin Impact', countview: '15.285' },
    { id: 2, image: require('../../../assets/img/danhmuc/lol.jpg'), name: 'League Of Leg...', countview: '201.831' },
    { id: 3, image: require('../../../assets/img/danhmuc/cs2.png'), name: 'Counter-Strike 2', countview: '47.568' },
    { id: 4, image: require('../../../assets/img/danhmuc/valorant.png'), name: 'Valorant', countview: '79.717' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP/>
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
            <TouchableOpacity key={item.id}  onPress={() => navigation.navigate('DTStream', { itemId: item.id })}>
             <View style={styles.streamchannel}>
             <View>
               <Image
                 source={item.video}
                 style={styles.videostream}
                 resizeMode="cover"
               />
               <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
               <View style={styles.viewers}><Text style={styles.viewerstext}>{item.countview} người xem</Text></View>
             </View>
             <View style={styles.detail}>
               <Image
                 source={item.userimg}
                 style={styles.imguser}
                 resizeMode="cover"
               />
               <View>
                 <Text style={styles.username}>{item.username}</Text>
                 <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
                 <Text style={styles.category}>{item.category}</Text>
                 <View style={styles.tag}>
                   <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
                   <View style={styles.tagbox}><Text style={styles.tagtext}>Anime</Text></View>
                 </View>
               </View>
             </View>
           </View>
           </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.titleview}>
          <Text style={styles.titletext}>Các danh mục chúng tôi nghĩ bạn sẽ thích</Text>
        </View>
        <ScrollView horizontal style={styles.ScrollView1} showsHorizontalScrollIndicator={false}>
        <View style={styles.viewbegin}/>
          {listcategory.map((item) => (
            <TouchableOpacity key={item.id} onPress={handlePress} >
            <View style={styles.slide}>
              <Image source={item.image} style={styles.imagedanhmuc} />
              <Text style={styles.textdanhmuc}>{item.name}</Text>
              <View style={styles.viewdanhmuc}>
                <Octicons name="dot-fill" style={styles.dotlivecategory} />
                <Text style={styles.countviewcategory}>{item.countview}</Text>
              </View>
            </View>
            </TouchableOpacity>
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
  slide: {
    marginRight: 10,
  },
  imagedanhmuc: {
    width: 185 * 0.7,
    height: 250 * 0.7,
    resizeMode: 'cover',
  },
  textdanhmuc: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  dotlivecategory: {
    color: '#E9181B',
    fontSize: 16,
    marginRight: 5,
  },
  countviewcategory: {
    fontSize: 14,
    color: '#A8A7B0',
    fontWeight: '500',
  },
  viewdanhmuc: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Discover;