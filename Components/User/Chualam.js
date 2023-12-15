import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chualam = () => {
    const navigation = useNavigation();
    const handleGoDone = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nothing in here</Text>
            <TouchableOpacity style={styles.button} onPress={handleGoDone}>
                <Text style={styles.buttonText}>Quay lại</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        backgroundColor: 'blue',
        height:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    buttonText: {
        fontSize: 20,
        fontWeight:'bold',
        color: 'red'
    }
});

export default Chualam;