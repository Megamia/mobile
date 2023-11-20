import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../../Test/Screen1';
import Screen2 from '../../Test/Screen2';
import Screen3 from '../../Test/Screen3';
import NavTOP from '../Home/NavTOP';

const Tab = createMaterialTopTabNavigator();

const Borwser1 = () => {
    const getTabWidth = (text) => {
        const { width } = Dimensions.get('window');
        const textWidth = Math.ceil(text.length * 9); // Giả định mỗi ký tự có độ rộng 10
        const maxWidth = width * 0.8;
        return Math.min(textWidth, maxWidth);
    };
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

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
            textTransform: 'capitalize',
        },
        tabBarItemStyle: {
            height: 50,
            // backgroundColor:'red',
            left:-15,
            top:-10
        },
        tabBarStyle: {
            width: '75%',
            height: 55,
            backgroundColor: 'black',
            top: -10,
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#BC95F7',
            height: 5,
            width: getTabWidth(route.name),
            left:64,
            marginBottom: 3,
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
                    <Tab.Screen name="Danh mục" component={Screen1} options={{ headerShown: false }} />
                    <Tab.Screen name="Kênh trực tiếp" component={Screen2} options={{ headerShown: false }} />
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
        backgroundColor: 'black',
        zIndex: 2,
    },
    container2: {
        backgroundColor: 'black',
        flex:1,
        // height:
    }
})

export default Borwser1;