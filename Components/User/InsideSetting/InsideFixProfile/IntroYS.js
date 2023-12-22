import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntroYS = () => {
    const navigation = useNavigation();
    const [inputIntroValue, setInputIntroValue] = useState("");

    const handleBack = () => {
        navigation.goBack();
    };
    useEffect(() => {
        // Khôi phục giá trị từ AsyncStorage khi mở màn hình
        restoreInputValue();
    }, []);
    const handleDone = async () => {
        if (inputIntroValue) {
            // Lưu giá trị vào AsyncStorage
            await saveInputValue(inputIntroValue);
            navigation.navigate("ISFixProfile", { value: inputIntroValue });
        } else {
            Alert.alert("Vui lòng nhập giới thiệu của bạn.");
        }
    };

    const handleInputChange = (text) => {
        setInputIntroValue(text);
    };

    const saveInputValue = async (value) => {
        try {
            await AsyncStorage.setItem('inputIntroValue', value);
        } catch (error) {
            console.log(error);
        }
    };

    const restoreInputValue = async () => {
        try {
            const value = await AsyncStorage.getItem('inputIntroValue');
            if (value !== null) {
                setInputIntroValue(value);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.title}>
                    <TouchableOpacity style={styles.buttonback} onPress={handleBack}>
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Giới thiệu về bản thân</Text>
                    <TouchableOpacity style={styles.buttonback} onPress={handleDone}>
                        <Text style={styles.textDone}>
                            Xong
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Giới thiệu bản thân trong giới hạn 300 ký tự.'
                        placeholderTextColor='gray'
                        fontSize={16}
                        onChangeText={handleInputChange}
                        value={inputIntroValue}
                    />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0E10',
    },
    top: {
        flex: 1,
        backgroundColor: '#0E0E10',
        marginHorizontal: 10,
        marginTop: 80,
    },
    main: {
        flex: 1,
    },
    title: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 10,
    },
    buttonback: {
        width: 60
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EAEAEC',
        textAlign: 'center',
    },

    textDone: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-end',
    },
    textInput: {
        marginHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        color: 'gray'
    },
});
export default IntroYS;