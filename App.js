import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './Components/User/Account';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBOT from './Components/Home/NavBOT';
import Dienmao from './Components/User/Dienmao';
import Chualam from './Components/User/Chualam';
import Notification from './Components/Home/Notification/Notification';
import NotificationST from './Components/Home/Notification/NotificationST';
import Screen1 from './Components(test)/Nav/Bot';
import NavBOT from './Components/Home/NavBOT';
import Login from './Components/Account/Login';
import Motinor from './Components/Motinor/Motinor';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="NavBOT" component={NavBOT} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
        <Stack.Screen name="Chualam" component={Chualam} options={{headerShown:false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name="NotificationST" component={NotificationST} options={{headerShown:false}}/>
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