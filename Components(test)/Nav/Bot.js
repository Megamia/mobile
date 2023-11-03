import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Bot = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewcon}>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <AntDesign name="heart" size={24} color="black" />
          <Text>Theo dõi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  viewcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});