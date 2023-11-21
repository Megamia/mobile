import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';

const Setting = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    const handleNothing = () =>{
        Alert.alert('Chưa làm được')
    }
    const handleLogout = () => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn đăng xuất?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đăng xuất',
                    onPress: () => {
                        navigation.navigate('Main');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.account}>
                    <TouchableOpacity style={styles.buttonback} onPress={handleBack}>
                        <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Cài đặt</Text>
                </View>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={[styles.anothertop, styles.big]}>
                        <View style={styles.viewtext1}>
                            <Text style={[styles.text1, styles.textup]}>
                                Tài khoản
                            </Text>
                            <Text style={styles.textdown}>
                                Hồ sơ, Amazon Prime
                            </Text>
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={[styles.anothermid, styles.big]}>
                        <View style={styles.viewtext1}>
                            <Text style={[styles.text1, styles.textup]}>
                                Tuỳ chọn
                            </Text>
                            <Text style={styles.textdown}>
                                Chủ đề màu tối, phát lại
                            </Text>
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Thông báo
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={[styles.anothermid, styles.big]}>
                        <View style={styles.viewtext1}>
                            <Text style={[styles.text1, styles.textup]}>
                                Bảo mật & Quyền riêng tư
                            </Text>
                            <Text style={styles.textdown}>
                                Liên hệ, Mật khẩu, Người dùng bị chặn
                            </Text>
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Đề xuất
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Hệ thống
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anotherbot}>
                        <Text style={styles.text1}>
                            Trợ giúp & Pháp lý
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={20} color="#EAEAEC" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={(handleLogout)}>
                <View style={styles.logout}>
                    <Text style={styles.textlogout}>
                        Đăng xuất
                    </Text>
                </View>
            </TouchableOpacity>
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
    account: {
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    big: {
        height: 70,
        paddingBottom:8,
    },
    iconContainer: {
        backgroundColor: '#8304B2',
        borderRadius: 20,
        padding: 6,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    name: {
        backgroundColor: '#18171C',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 15
    },
    viewtext1: {
        flex: 1,
    },
    text1: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EAEAEC',
        marginLeft: 10,
    },
    textup: {
        marginTop: 10
    },
    textdown: {
        color: '#A6A5AA',
        marginLeft: 10,
    },
    iconContainer1: {
        paddingLeft: 30,
        marginRight: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    channel: {
        backgroundColor: '#18171C',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 15
    },
    anothertop: {
        backgroundColor: '#18171C',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#2F2F33',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    anothermid: {
        backgroundColor: '#18171C',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#2F2F33',
        borderWidth: 1,
    },
    anotherbot: {
        backgroundColor: '#18171C',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'space-between'
    },
    icon: {
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    textlogout: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Helvetica',
        color: '#EAEAEC',
        paddingTop: 15,
    },
    logout: {
        backgroundColor: '#18171C',
        height: 60,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
    }
});

export default Setting;