import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../../Test/Screen1';
import Screen2 from '../../Test/Screen2';
import Screen3 from '../../Test/Screen3';

const Tab = createMaterialTopTabNavigator();

const NavTOP2 = () => {
    const getTabWidth = (text) => {
        const { width } = Dimensions.get('window');
        const textWidth = Math.ceil(text.length * 9); // Giả định mỗi ký tự có độ rộng 10
        const maxWidth = width * 0.8;
        return Math.min(textWidth, maxWidth);
    };
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
            let iconComponent;

            if (route.name === 'Screen1') {
                iconComponent = focused ? <Text style={{ color }}></Text> : null;
            } else if (route.name === 'Screen2') {
                iconComponent = focused ? <Text style={{ color }}></Text> : null;
            }
            return iconComponent;
        },

        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#BC95F7',
        tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            textTransform: 'capitalize',
        },
        tabBarItemStyle: {
            width: route.name === 'Screen1' ? 100 : 150,
            height:50,
            // backgroundColor:'red',
        },
        tabBarStyle: {
            width: '70%',
            height: 63,
            backgroundColor: 'black',
            borderBottomWidth: 0,
            borderBottomColor: 'transparent',
            
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#BC95F7',
            height: 5,
            width: getTabWidth(route.name),
            left: '25%',
            marginLeft: -getTabWidth(route.name) / 2,
        },

    });

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Danh mục" component={Screen1} options={{ headerShown: false }} />
            <Tab.Screen name="Kênh trực tiếp" component={Screen2} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default NavTOP2;