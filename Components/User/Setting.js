import React,{useState,useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';
import Intro from './../Account/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
    const navigation = useNavigation();
    const handleBack = async () => {
        try {
            await AsyncStorage.setItem('selectedImage', selectedImage);
            navigation.goBack();
        } catch (error) {
            console.log('Lỗi khi lưu trạng thái hình ảnh đã chọn:', error);
        }
    };
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
    const handleNothing = () => {
        Alert.alert('Chưa làm');
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
                        navigation.navigate('Intro');
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
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Cài đặt</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ISAccount')}>
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
                            <AntDesign name="right" size={24} color="white" />
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
                            <AntDesign name="right" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Thông báo
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={24} color="white" />
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
                            <AntDesign name="right" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Đề xuất
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anothermid}>
                        <Text style={styles.text1}>
                            Hệ thống
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNothing}>
                    <View style={styles.anotherbot}>
                        <Text style={styles.text1}>
                            Trợ giúp & Pháp lý
                        </Text>
                        <View style={styles.icon}>
                            <AntDesign name="right" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.name1}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/img/taihen-logo.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <Text style={styles.text2}>
                        TAIHEN TEAM
                    </Text>
                </View>
                <View style={styles.version}>
                    <Text style={styles.text3}>
                        Trixter v0.1 ⓑⓔⓣⓐ
                    </Text>
                </View>

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
        paddingBottom: 10,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EAEAEC',
        marginLeft: 15,
    },
    textup: {
        marginTop: 13
    },
    textdown: {
        color: '#A6A5AA',
        marginLeft: 15,
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
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#2F2F33',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    anothermid: {
        backgroundColor: '#18171C',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#2F2F33',
        borderWidth: 1,
    },
    anotherbot: {
        backgroundColor: '#18171C',
        height: 50,
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
        fontFamily: 'Helvetica',
        color: '#EAEAEC',
        paddingTop: 15,
    },
    logout: {
        backgroundColor: '#18171C',
        height: 55,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
    img: {
        width: 185 * 0.3,
        height: 189 * 0.3,
    },
    name1: {
        marginBottom: 70
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    version: {
        justifyContent: "center",
        alignItems: "center",
    },
    text2: {
        color: '#AB9C9C',
        fontSize: 40,
        fontWeight: '900',
        fontFamily: 'Courier New',
        marginTop: 14,
        marginLeft: 20,
    },
    text3: {
        color: '#A6A5AA',
        fontSize: 15,
        fontWeight: '900',
        fontFamily: 'Courier New',
        marginTop: 10
    }
});

export default Setting;