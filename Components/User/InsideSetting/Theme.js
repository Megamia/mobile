import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Animated, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [buttonColor, setButtonColor] = useState('transparent');
  const animatedValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (isActive && !isMoving) {
      setIsMoving(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setIsMoving(false);
        setButtonColor('#8304B2');
      });
    } else if (!isActive && !isMoving) {
      setIsMoving(true);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setIsMoving(false);
        setButtonColor('gray');
      });
    }
  }, [isActive, isMoving]);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  const animatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [5, 55],
        }),
        
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={[styles.a, { backgroundColor: buttonColor }]}>
        <TouchableOpacity onPress={handleToggle}>
          <Animated.View style={[styles.toggleButton, animatedStyle]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  a: {
    width: 100,
    height:50,
    // borderColor: 'black',
    // borderWidth: 2,
    borderRadius: 50,
    justifyContent:'center'
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default ToggleButton;