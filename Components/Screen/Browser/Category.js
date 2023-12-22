import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';


const Category = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/lol.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>League Of Legends</Text>
            <Text style={styles.countview}>212.820 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Nhập vai</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Chiến thuật</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>MOBA</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/valorant.png')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>VALORANT</Text>
            <Text style={styles.countview}>83.463 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Bắn Súng Góc Nhìn Thứ Nhất</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Tay súng</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/cs2.png')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Counter-Strike</Text>
            <Text style={styles.countview}>97.966 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Bắn Súng Góc Nhìn Thứ Nhất</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Tay súng</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/dota2.png')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Dota 2</Text>
            <Text style={styles.countview}>63.064 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Chiến thuật</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>MOBA</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Hành động</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/justtalk.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Chỉ trò chuyện</Text>
            <Text style={styles.countview}>372.335 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Người thục việc thực</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/genshin.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Genshin Impact</Text>
            <Text style={styles.countview}>212.820 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Nhập vai</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Game phiêu lưu</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Hành động</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/tft.png')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Teamfight Tactics</Text>
            <Text style={styles.countview}>19.569 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Chiến thuật</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Game bài & bảng</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/pubg.png')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>PUBG:BATTLEGROUNDS</Text>
            <Text style={styles.countview}>10.132 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Bắn Súng Góc Nhìn Thứ Nhất</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Tay súng</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/minecraft.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Minecraft</Text>
            <Text style={styles.countview}>32.517 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Giả lập</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Game phiêu lưu</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>MMO</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Sinh tồn</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/obionline.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Albion Online</Text>
            <Text style={styles.countview}>10.099 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Nhập vai</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>MMO</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Thế giới mở</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <Image
            source={require('../../../assets/img/danhmuc/hsr.jpg')}
            style={styles.categoryimg}
            resizeMode="cover"
          />
          <View style={styles.detail}>
            <Text style={styles.name}>Honkai: Star Rail</Text>
            <Text style={styles.countview}>32.517 người xem</Text>
            <View style={styles.tag}>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Nhập vai</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Chiến thuật</Text></View>
              <View style={styles.tagbox}><Text style={styles.tagtext}>Game phiêu lưu</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.end}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
  },
  main: {
    flex: 1,
    padding: 15,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  categoryimg: {
    width: 185 * 0.35,
    height: 250 * 0.35,
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
  detail: {
    marginLeft: 15,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 5,
  },
  countview: {
    color: '#A8A7B0',
    fontSize: 16,
    paddingBottom: 5,
  },
  end:{
    marginBottom:15,
  }
});

export default Category;