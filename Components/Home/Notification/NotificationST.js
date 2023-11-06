import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationST = () => {
  const { height } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(height)).current;
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: height * 0.2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <TouchableOpacity style={styles.iconL} onPress={handleBack}>
        <AntDesign name="left" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>Screen 2</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#0E0E10',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});

export default NotificationST;