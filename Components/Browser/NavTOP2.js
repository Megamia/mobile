import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from './Category';
import Channel from './Channel';
import NavTOP from '../Home/NavTOP';

const Tab = createMaterialTopTabNavigator();

const NavTOP2 = () => {
    const getTabWidth = (text) => {
        const { width } = Dimensions.get('window');
        const textWidth = Math.ceil(text.length * 9); 
        const maxWidth = width * 0.8;
        return Math.min(textWidth, maxWidth);
    };
    const screenOptions = ({ route }) => ({
        tabBarIcon: (focused) => {
            if (route.name === 'Danh mục') {
                iconName = focused ? 'Danh mục' : '';
            } else if (route.name === 'Kênh trực tiếp') {
                iconName = focused ? 'Kênh trực tiếp' : '';
            }
        },

        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#BC95F7',
        tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            textTransform: 'none',
        },
        tabBarItemStyle: {
            height: 50,
            // backgroundColor:'red',
            left:-18,
            top:-10,
        },
        tabBarStyle: {
            width: '70%',
            height: 50,
            backgroundColor: '#0E0E10',
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#BC95F7',
            height: 3,
            width: getTabWidth(route.name),
            left:51,
            marginLeft: -getTabWidth(route.name) / 2,
        },

    });

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <NavTOP />
            </View>
            <View style={styles.container2}>
                <Tab.Navigator screenOptions={screenOptions}>
                    <Tab.Screen name="Danh mục" component={Category} options={{ headerShown: false }} />
                    <Tab.Screen name="Kênh trực tiếp" component={Channel} options={{ headerShown: false }} />
                </Tab.Navigator>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1
    },
    container1: {
        backgroundColor: '#0E0E10',
        zIndex: 2,
    },
    container2: {
        backgroundColor: '#0E0E10',
        flex:1,
        // height:
    }
})

export default NavTOP2;