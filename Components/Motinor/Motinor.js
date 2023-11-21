import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity,Alert } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import NavTOP from '../Home/NavTOP';

const Motinor = ({ navigation }) => {

  const handlePress = () => {
    Alert.alert('Thông báo', 'Chưa làm');
  };
  const data = [
    { id: 1, image: require('../../assets/img/danhmuc/genshin.jpg'), name: 'Genshin Impact', countview: '15.285' },
    { id: 2, image: require('../../assets/img/danhmuc/lol.jpg'), name: 'League Of Leg...', countview: '201.831' },
    { id: 3, image: require('../../assets/img/danhmuc/cs2.png'), name: 'Counter-Strike 2', countview: '47.568' },
    { id: 4, image: require('../../assets/img/danhmuc/valorant.png'), name: 'Valorant', countview: '79.717' },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress} >
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imagedanhmuc} />
        <Text style={styles.textdanhmuc}>{item.name}</Text>
        <View style={styles.viewdanhmuc}>
          <Octicons name="dot-fill" style={styles.dotlivecategory} />
          <Text style={styles.countviewcategory}>{item.countview}</Text>
        </View>
      </View>
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[1, 3, 5]} showsVerticalScrollIndicator={true} scrollIndicatorInsets={{ backgroundColor: 'red' }}>
        <View style={styles.main}>
          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.texttitle}>Các kênh trực tiếp của bạn</Text>
            </View>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/valorantfun.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>7.644</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/valorantuser.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username}>Valorant Esports</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">pag time for int, t1 win...</Text>
                  <Text style={styles.textcontent}>Valorant</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Gaming</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Esposts</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Valorant</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/boxing.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>10.523</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/ufc.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">Ultimate Fighting...</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">Mixed Martial Arts...</Text>
                  <Text style={styles.textcontent}>U.F.C</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>UFC</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Sports</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Fighter</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
            <View style={styles.contentS}>
              <View>
                <Image
                  source={require('../../assets/gif/genshinehehe.gif')}
                  style={styles.imglive}
                  resizeMode="cover"
                />
                <View style={styles.overlay} />
                <Octicons name="dot-fill" style={styles.dotlive} />
                <Text style={styles.contview}>2.041</Text>
              </View>
              <View style={styles.detail}>
                <View style={styles.user}>
                  <Image source={require('../../assets/img/genshinuser.png')}
                    style={styles.imguser}
                    resizeMode="cover" />
                  <Text style={styles.username}>ベトアン</Text>
                </View>
                <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">The Outlander Who...</Text>
                <Text style={styles.textcontent}>Genshin Impact</Text>
                <View style={styles.category}>
                  <View style={styles.categorybox}><Text style={styles.categorytext}>GenshinImpact</Text></View>
                  <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/mukbang.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>2.721</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/mukbanguser.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username}>Matty & Benny</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">Eat Out America</Text>
                  <Text style={styles.textcontent}>Mukbang</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Mukbang</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>ASMR</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Cuisine</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.texttitle}>Các danh mục đã theo dõi</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.texttitle}>Kênh được đề xuất cho bạn</Text>
            </View>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/honkai-star-rail-combat-system-8.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>4.490</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/tenha-user.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username}>Tenha</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">HSR Genshin dailies...</Text>
                  <Text style={styles.textcontent}>Honkai: Star Rail</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Anime</Text></View>

                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/minecraft.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>1.690</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/maichuxo-user.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">maichuxo</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">play minecraft with...</Text>
                  <Text style={styles.textcontent}>Minecraft</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>ENVtuber</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Singapore</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/lol-lesin.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>8.566</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/Ayellol-user.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username}>Ayellol</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">[DIA 16] AYEL KOR...</Text>
                  <Text style={styles.textcontent}>League of Legends</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Ayel</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Toplane</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>lol</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
              <View style={styles.contentS}>
                <View>
                  <Image
                    source={require('../../assets/gif/genshincombat.gif')}
                    style={styles.imglive}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                  <Octicons name="dot-fill" style={styles.dotlive} />
                  <Text style={styles.contview}>3.449</Text>
                </View>
                <View style={styles.detail}>
                  <View style={styles.user}>
                    <Image source={require('../../assets/img/ProfessionalPridER.png')}
                      style={styles.imguser}
                      resizeMode="cover" />
                    <Text style={styles.username}>ProfessionalPridER</Text>
                  </View>
                  <Text style={styles.textcontent} numberOfLines={1} ellipsizeMode="tail">Under the tree-eee...</Text>
                  <Text style={styles.textcontent}>Genshin Impact</Text>
                  <View style={styles.category}>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Asia</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>Anime</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                    <View style={styles.categorybox}><Text style={styles.categorytext}>sus</Text></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
  top: {
    height: 85,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  contentL: {
    paddingTop: 20,
  },
  contentS: {
    paddingTop: 15,
    flexDirection: 'row',
  },
  main: {
    marginLeft: 15,
    marginRight: 15,
    overflow: 'hidden',
    paddingBottom: 10,
  },

  texttitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginTop: 10,
  },
  imglive: {
    width: 128, height: 72
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  dotlive: {
    position: 'absolute',
    color: '#E9181B',
    fontSize: 16,
    bottom: 33,
    left: 9,
  },
  contview: {
    position: 'absolute',
    fontSize: 11,
    color: 'white',
    fontWeight: '500',
    bottom: 35,
    left: 20,
  },
  detail: {
    paddingLeft: 15,
  },
  textcontent: {
    fontSize: 20,
    color: '#A8A7B0',
    marginBottom: 5,
  },
  imguser: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 5,
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categorybox: {
    backgroundColor: '#323234',
    borderRadius: ' 50%',
    marginRight: 4,
  },
  categorytext: {
    color: '#C3C3C5',
    fontWeight: 'bold',
    fontSize: 13,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
  },
  slide: {
    marginRight: 10,
    marginTop: 15,
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

export default Motinor;