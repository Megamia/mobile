import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const Notification = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity style={styles.iconL} onPress={handleBack}>
                    <AntDesign name="left" size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.text}>Thông báo</Text>
                <TouchableOpacity style={styles.iconR} onPress={() => navigation.navigate('NotificationST')}>
                    <Ionicons name="ios-settings-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0E10',
    },
    head: {
        marginTop: 55,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 23,
        color: 'white',
        marginLeft: 10
    },
    iconL: {
        marginLeft: 10,
    },
    iconR: {
        marginRight: 20,
    },
    button: {
        // backgroundColor: 'blue',
        // height: 50,
        // width: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 20
    },

});

export default Notification;