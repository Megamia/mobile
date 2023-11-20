import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Account from './Components/User/Account';
import { NavigationContainer } from '@react-navigation/native';
import NavBOT from './Components/Home/NavBOT';
import Dienmao from './Components/User/Dienmao';
import Chualam from './Components/User/Chualam';
import Notification from './Components/Home/Notification/Notification';
import NotificationST from './Components/Home/Notification/NotificationST';

import Login from './Components/Account/Login';
import Motinor from './Components/Motinor/Motinor';
import Profile from './Components/User/Profile';
import Mychannel from './Components/User/Mychannel';
import Setting from './Components/User/Setting';
import Intro from './Components/Account/Intro';
import NavTOP2 from './Components/Home/NavTOP2';
import Onlinechannel from './Components/Browser/Onlinechannel';

const Stack = createStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Intro} options={{headerShown:false}}/>
        <Stack.Screen name="NavBOT" component={NavBOT} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
        <Stack.Screen name="Chualam" component={Chualam} options={{headerShown:false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name="NotificationST" component={NotificationST} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
        <Stack.Screen name="Mychannel" component={Mychannel} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Onlinechannel" component={Onlinechannel} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});