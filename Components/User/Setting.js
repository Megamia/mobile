import React from "react";
import { Text,View, StyleSheet,TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Setting = () =>{
    const navigation = useNavigation();
  const handleDone = () => {
    navigation.goBack();
  };
  const handleLogout = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Đăng xuất',
          onPress: () => {
            navigation.navigate('Main');
          },
        },
      ],
      { cancelable: false }
    );
  };

    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={(handleLogout)}>
                <Text style={styles.text}>
                    Đăng xuất
                </Text>
           </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color: 'black',
        fontSize: 30,

    }
});

export default Setting;