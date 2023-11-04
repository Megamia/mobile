import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather,Ionicons } from 'react-native-vector-icons';
import Screen1 from './Motinor/Screen1';
import Screen2 from './Discover/Screen2';
import Screen3 from './Browser/Screen3';
import Search from './Search/Search';

const Tab = createBottomTabNavigator();

const TabNavigationBOT = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size, focused }) => {
      let iconComponent;
      
      if (route.name === 'Theo dõi') {
        const iconName = focused ? 'heart' : 'heart-o';
        iconComponent = <FontAwesome name={iconName} size={size} color={color} style={styles.icon} />;
      } else if (route.name === 'Khám phá') {
        const iconName = focused ? 'compass' : 'compass-outline';
        iconComponent = <Ionicons name={iconName} size={size+5} color={color} />;
      }else if (route.name === 'Duyệt') {
        const iconName = focused ? 'copy' : 'copy-outline';
        iconComponent = <Ionicons  name={iconName} size={size} color={color} />;
      } else if (route.name === 'Tìm kiếm') {
        iconComponent = <Feather name="search" size={size} color={color} />;
      }
      
      return iconComponent;
    },
    tabBarActiveTintColor: '#C193FF',
    tabBarInactiveTintColor: '#888',
    tabBarLabelStyle: {
      fontSize: 12,
      paddingBottom: 10,
    },
    tabBarStyle: {
      height: 80,
      backgroundColor: '#0E0E10',
      borderTopWidth: 1,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Theo dõi" component={Screen1} options={{ headerShown: false }} />
      <Tab.Screen name="Khám phá" component={Screen2} options={{ headerShown: false }} />
      <Tab.Screen name="Duyệt" component={Screen3} options={{ headerShown: false }} />
      <Tab.Screen name="Tìm kiếm" component={Search} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles=StyleSheet.create({
  
})
export default TabNavigationBOT;