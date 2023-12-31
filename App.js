import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './Components/User/Account';
import { NavigationContainer } from '@react-navigation/native';
import NavBOT from './Components/Home/NavBOT';
import Chualam from './Components/User/Chualam';
import Notification from './Components/Home/Notification/Notification';
import NotificationST from './Components/Home/Notification/NotificationST';
import Login from './Components/Account/Login';
import Profile from './Components/User/Profile';
import Setting from './Components/User/Setting';
import Intro from './Components/Account/Intro';
import ISAccount from './Components/User/InsideSetting/ISAccount';
import Signup from './Components/Account/Signup';
import UserList from './Components/Account/UserList';
import ISFixProfile from './Components/User/InsideSetting/InsideFixProfile/ISFixProfile';
import DTStream from './Components/Screen/Detail/DTStream';
import IntroYS from './Components/User/InsideSetting/InsideFixProfile/IntroYS';
import ISMychannel from './Components/User/InsideMyChannel/ISMychannel';
import { SelectedImageProvider } from './Components/SelectedImageContext';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SelectedImageProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="NavBOT" component={NavBOT} options={{ headerShown: false }} />
        <Stack.Screen name="ISMychannel" component={ISMychannel} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Chualam" component={Chualam} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationST" component={NotificationST} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="UserList" component={UserList} options={{ headerShown: false }} />
        <Stack.Screen name="DTStream" component={DTStream} options={{ headerShown: false }} />
        <Stack.Screen name="ISFixProfile" component={ISFixProfile} options={{ headerShown: false }} />
        <Stack.Screen name="IntroYS" component={IntroYS} options={{ headerShown: false }} />
        <Stack.Screen name="ISAccount" component={ISAccount} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </SelectedImageProvider>
  );
}