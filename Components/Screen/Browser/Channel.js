import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Channel = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.streamchannel}>
          <View>
            <Image
              source={require('../../../assets/gif/honkai-star-rail-combat-system-8.gif')}
              style={styles.videostream}
              resizeMode="cover"
            />
            <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
            <View style={styles.viewers}><Text style={styles.viewerstext}>4.490 người xem</Text></View>
          </View>
          <View style={styles.detail}>
            <Image
              source={require('../../../assets/img/tenha-user.png')}
              style={styles.imguser}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.username}>Tenha</Text>
              <Text style={styles.content}>HSR Genshin dailies and OW after</Text>
              <Text style={styles.category}>Honkai: Star Rail</Text>
              <View style={styles.tag}>
                <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Anime</Text></View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.streamchannel}>
          <View>
            <Image
              source={require('../../../assets/gif/minecraft.gif')}
              style={styles.videostream}
              resizeMode="cover"
            />
            <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
            <View style={styles.viewers}><Text style={styles.viewerstext}>1.690 người xem</Text></View>
          </View>
          <View style={styles.detail}>
            <Image
              source={require('../../../assets/img/maichuxo-user.png')}
              style={styles.imguser}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.username}>maichuxo</Text>
              <Text style={styles.content}>play minecraft with maichuxo and sing</Text>
              <Text style={styles.category}>Minecraft</Text>
              <View style={styles.tag}>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Vtuber</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Singapore</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>ENVtuber</Text></View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.streamchannel}>
          <View>
            <Image
              source={require('../../../assets/gif/lol-lesin.gif')}
              style={styles.videostream}
              resizeMode="cover"
            />
            <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
            <View style={styles.viewers}><Text style={styles.viewerstext}>8.566 người xem</Text></View>
          </View>
          <View style={styles.detail}>
            <Image
              source={require('../../../assets/img/Ayellol-user.png')}
              style={styles.imguser}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.username}>Ayellol</Text>
              <Text style={styles.content}>[DIA 16] AYEL KOREA ARC BOOTCA...</Text>
              <Text style={styles.category}>League of Legends</Text>
              <View style={styles.tag}>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Ayel</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Toplane</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>lol</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>leagueoflegends</Text></View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.streamchannel}>
          <View>
            <Image
              source={require('../../../assets/gif/genshincombat.gif')}
              style={styles.videostream}
              resizeMode="cover"
            />
            <View style={styles.streambox}><Text style={styles.streamtextbox}>TRỰC TIẾP</Text></View>
            <View style={styles.viewers}><Text style={styles.viewerstext}>3.449 người xem</Text></View>
          </View>
          <View style={styles.detail}>
            <Image
              source={require('../../../assets/img/ProfessionalPridER.png')}
              style={styles.imguser}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.username}>ProfessionalPridER</Text>
              <Text style={styles.content}>Under the tree-eee-eee | !yt !disco...</Text>
              <Text style={styles.category}>Genshin Impact</Text>
              <View style={styles.tag}>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Asia</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Anime</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>sus</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>Professional</Text></View>
                <View style={styles.tagbox}><Text style={styles.tagtext}>English</Text></View>
              </View>
            </View>
          </View>
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
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagbox: {
    backgroundColor: '#323234',
    borderRadius: ' 50%',
    marginRight: 4,
  },
  tagtext: {
    color: '#C3C3C5',
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 7,
    paddingLeft: 7,
  },
  main:
  {
    paddingTop: 15,
  },
  streamchannel:
  {
    paddingBottom:12,
  },
  videostream: {
    width: 390,
    height: 220,
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
  detail:{
    paddingTop: 7,
    paddingRight: 15,
    paddingLeft:15,
    flexDirection:'row',
  },
  imguser:{
    width: 40,
    height:40,
    borderRadius:20,
    marginRight: 7,
  },
  username:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom:2,
  },
  content:{
    color: '#A8A7B0',
    fontSize: 18,
    paddingBottom:2,
  },
  category:{
    color: '#A8A7B0',
    fontSize: 18,
    paddingBottom:5,
  },
});

export default Channel;