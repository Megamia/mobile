import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

const Top = () => {
    return (
        <View style={styles.container}>
            <View style={styles.a}>
                <TouchableOpacity>
                    <FontAwesome name="user-circle-o" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.b}>
                <TouchableOpacity style={styles.icon}>
                    <Feather name="cast" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Feather name="message-square" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <AntDesign name="inbox" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.c, styles.icon]}>
                    <Feather name="radio" size={24} color="white" />
                    <Text style={styles.text}>Tạo</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 85,
        alignItems: 'flex-start', 
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(14,14,16, 0.9)',
        
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    a: {
        marginLeft:10,
        marginTop:35,
        position:'absolute',
        left:0,
        justifyContent: 'center',
        height: 50,
    },
    b: {
        marginTop:35,
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        height: 50
    },
    c: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#27262C',
        borderRadius: 20,
        width: 80,
        height: 40
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }

});

export default Top;