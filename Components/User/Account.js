import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <View style={styles.account}>
          <Text style={styles.text}>Tài khoản</Text>
          <TouchableOpacity style={styles.button} onPress={handleDone}>
            <Text style={styles.buttonText}>Xong</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.name}>
          <View style={styles.iconContainer}>
            <Entypo name="user" size={24} color="white" />
          </View>
          <Text style={styles.text1}>
            Kiyosato Mei
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Mychannel')}>
          <View style={styles.channel}>
            <View style={styles.iconContainer1}>
              <Entypo name="video-camera" size={24} color="white" />
            </View>
            <Text style={styles.text1}>
              Kênh của tôi
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chualam')}>
          <View style={styles.anothertop}>
            <View style={styles.iconContainer1}>
              <AntDesign name="staro" size={24} color="white" />
            </View>
            <Text style={styles.text1}>
              Gói đăng ký theo dõi
            </Text>
            <View style={styles.icon}>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chualam')}>
          <View style={styles.anothermid}>
            <View style={styles.iconContainer1}>
              <Feather name="gift" size={24} color="white" />
            </View>
            <Text style={styles.text1}>
              Quà tặng & phần thưởng
            </Text>
            <View style={styles.icon}>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.anothermid}>
            <View style={styles.iconContainer1}>
              <Ionicons name="ios-settings-outline" size={24} color="white" />
            </View>
            <Text style={styles.text1}>
              Cài đặt
            </Text>
            <View style={styles.icon}>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Chualam')}>
          <View style={styles.anotherbot}>
            <View style={styles.iconContainer1}>
              <Feather name="moon" size={24} color="white" />
            </View>
            <Text style={styles.text1}>
              Diện mạo
            </Text>
            <View style={styles.icon}>
              <AntDesign name="right" size={20} color="white" />
            </View>
          </View>
        </TouchableOpacity> */}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10'
  },
  main: {
    flex: 1,
    backgroundColor: '#0E0E10',
    marginHorizontal: 10,
    marginTop: 80,
  },
  account: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 10
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  },
  iconContainer: {
    backgroundColor: '#8304B2',
    borderRadius: 20,
    padding: 6,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  name: {
    backgroundColor: '#18171C',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15
  },
  text1: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  iconContainer1: {
    paddingLeft: 30,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  channel: {
    backgroundColor: '#18171C',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15
  },
  anothertop: {
    backgroundColor: '#18171C',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#2F2F33',
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  anothermid: {
    backgroundColor: '#18171C',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#2F2F33',
    borderWidth: 1
  },
  anotherbot: {
    backgroundColor: '#18171C',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'space-between'
  },
  icon: {
    justifyContent: 'flex-end',
    marginRight: 20,
  }
});

export default Account;