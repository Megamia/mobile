import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBOT from '../TabNavigationBOT ';

const Bot = () => {
  return (
    <NavigationContainer>
      <TabNavigationBOT />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bot;