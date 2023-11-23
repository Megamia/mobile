import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';

const ISAccount = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    const handleNothing = () => {
        Alert.alert('Chưa làm được')
    }
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.title}>
                    <TouchableOpacity style={styles.buttonback} onPress={handleBack}>
                        <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Tài khoản</Text>
                </View>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.viewfix}>
                        <View style={styles.viewtext1}>
                            <Text style={styles.textup}>
                                Sửa hồ sơ
                            </Text>
                            <Text style={styles.textdown}>
                                Ảnh hồ sơ, biểu ngữ, giới thiệu bản thân
                            </Text>
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
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
    main: {
        flex: 1,
        backgroundColor: '#0E0E10',
        marginHorizontal: 10,
        marginTop: 80,
    },
    title: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 10
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EAEAEC',
        textAlign: 'center',
        marginRight: 30,
    },





    viewtext1: {
        flex: 1,
    },

    textup: {
        marginTop: 13,
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EAEAEC',
        marginLeft: 15,
    },
    textdown: {
        color: '#A6A5AA',
        // fontSize: 20,

        marginLeft: 15,
    },

    viewfix: {
        backgroundColor: '#18171C',
        height: 70,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },

    icon: {
        justifyContent: 'flex-end',
        marginRight: 20,
    },






});

export default ISAccount;