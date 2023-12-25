import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const NavTOP = () => {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const restoreSelectedImage = async () => {
            try {
                const imageUri = await AsyncStorage.getItem('selectedImage');
                if (imageUri !== null) {
                    setSelectedImage(imageUri);
                }
            } catch (error) {
                console.log('Lỗi khi khôi phục trạng thái hình ảnh:', error);
            }
        };

        restoreSelectedImage();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.a}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <View style={styles.iconContainer}>
                        <View style={styles.viewimg}>
                            {selectedImage ? (
                                <Image source={{ uri: selectedImage }} style={styles.img} />
                            ) : (
                                <Entypo name="user" size={32} color="white" />
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.b}>
                <TouchableOpacity onPress={() => navigation.navigate('Chualam')} style={styles.icon}>
                    <Feather name="cast" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chualam')} style={styles.icon}>
                    <Feather name="message-square" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.icon}>
                    <AntDesign name="inbox" size={24} color="white" />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Chualam')} style={[styles.c, styles.icon]}>
                    <Feather name="radio" size={24} color="white" />
                    <Text style={styles.text}>Tạo</Text>
                </TouchableOpacity> */}
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
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    a: {
        marginLeft: 15,
        marginTop: 35,
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        height: 50,
    },
    b: {
        marginTop: 35,
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        height: 50,
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
        marginHorizontal: 10,
    },
    iconContainer: {
        backgroundColor: '#8304B2',
        borderRadius: 50,
        // padding: 6,
    },
    viewimg: {
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
});

export default NavTOP;