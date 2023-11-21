import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather,Ionicons } from 'react-native-vector-icons';
import Motinor from '../Motinor/Motinor';
import Discover from '../Discover/Discover';
import Search from '../Search/Search';
import NavTOP2 from '../Browser/NavTOP2';

const Tab = createBottomTabNavigator();

const NavBOT = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size, focused }) => {
      let iconComponent;
      
      if (route.name === 'Theo dõi') {
        const iconName = focused ? 'heart' : 'heart-o';
        iconComponent = <FontAwesome name={iconName} size={size} color={color}  />;
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
    },
    tabBarStyle: {
      height: 80,
      backgroundColor: '#0E0E10',
      borderTopColor: '#242426',
    },
  //   tabBarIndicatorStyle: {
  //     backgroundColor: 'white',
  //     height: 3,
  //     width: 10,
  //     left:51,
  //     marginLeft: 10,
  // },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Theo dõi" component={Motinor} options={{ headerShown: false }} />
      <Tab.Screen name="Khám phá" component={Discover} options={{ headerShown: false }} />
      <Tab.Screen name="Duyệt" component={NavTOP2} options={{ headerShown: false }} />
      <Tab.Screen name="Tìm kiếm" component={Search} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
export default NavBOT;