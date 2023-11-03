import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Home from './Components/Home/Home';
// import User from './Components/User/User';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import Bot from './Components/Nav/Bot';
import Home from './Components/Home/Home';
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="User" component={User} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});