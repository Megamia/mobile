import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Quay về</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:30,
    color:'black',
  }
})