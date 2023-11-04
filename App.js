import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Home from './Components/Home/Home';
// import User from './Components/User/User';
import { createStackNavigator } from '@react-navigation/stack';
// import Bot from './Components/Nav/Bot';
import Home from './Components/Home/Home';
import Top from './Components/Home/Top';
import Screen1 from './Components/Motinor/Screen1';
import Bot from './Components/Home/Bot';
// const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBOT from './Components/TabNavigationBOT ';

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="User" component={User} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <TabNavigationBOT />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});