import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Home from './Components/Home/Home';
// import User from './Components/User/User';
import { createStackNavigator } from '@react-navigation/stack';
// import Bot from './Components/Nav/Bot';
import Home from './Components/Home/Home';
import Top from './Components/Home/Top';
import Screen1 from './Components/Motinor/Motinor';
import Bot from './Components/Home/Bot';
import Account from './Components/User/Account';
// const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBOT from './Components/TabNavigationBOT ';
import Dienmao from './Components/User/Dienmao';
import Chualam from './Components/User/Chualam';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="User" component={User} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigationBOT} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
        <Stack.Screen name="Chualam" component={Chualam} options={{ headerShown: false }}/>
      </Stack.Navigator>
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