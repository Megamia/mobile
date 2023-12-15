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
        Alert.alert('Nothing in here')
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

                <TouchableOpacity onPress={() => navigation.navigate('ISFixProfile')}>
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
                            <AntDesign name="right" size={24} color="#57575C" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.viewlogout}>
                        <Text style={styles.textlogout}>
                            Đăng xuất khỏi Amazon Prime
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.viewdltAP}>
                    <Text style={styles.textdltAP}>
                        Xoá mọi thông tin đăng nhập Amazon Prime đã lưu.
                    </Text>
                </View>
                <View style={styles.viewdanger}>
                    <View style={[styles.viewDnD, styles.viewDnDT]}>
                        <Text style={styles.textDnD}>
                            Vô hiệu hoá tài khoản
                        </Text>
                    </View>

                    <View style={[styles.viewDnD, styles.viewDnDB]}>
                        <Text style={styles.textDnD}>
                            Xoá tài khoản vĩnh viễn
                        </Text>
                    </View>
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
        marginTop: 10,
    },
    viewlogout: {
        backgroundColor: '#18181B',
        justifyContent: "center",
        height: 50,
        marginTop: 30,
        borderRadius: 10,
    },
    textlogout: {
        color: '#7F65A8',
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    viewdltAP: {
        marginTop: 10,
        marginBottom: 25,
        paddingLeft: 30,
        paddingRight: 30
    },
    textdltAP: {
        color: '#929299'
    },
    viewdanger: {
        backgroundColor: '#18181B',
        height: 100,
        borderRadius: 10,

    },
    viewDnD: {
        backgroundColor: '#18181B',
        height: 50,
        justifyContent: "center",
        marginLeft: 15,
    },
    viewDnDT: {
        borderBottomColor: '#3B3B3D',
        borderBottomWidth: 1,
        borderTopRightRadius: 10,
    },
    viewDnDB: {
        borderBottomRightRadius: 10,
    },
    textDnD: {
        color: '#C11917',
        fontSize: 16,
        fontWeight: "bold",
    },

});

export default ISAccount;