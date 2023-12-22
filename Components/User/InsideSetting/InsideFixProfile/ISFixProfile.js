import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IntroYS from './IntroYS';

const ISFixProfile = ({ navigation, route }) => {
    const value = route.params?.value || "";
    const handleBack = () => {
        navigation.goBack();
    };
    const handleDone = async () => {
        try {
            await AsyncStorage.setItem('selectedImage', selectedImage);
            navigation.goBack();
        } catch (error) {
            console.log('Lỗi khi lưu trạng thái hình ảnh đã chọn:', error);
        }
    };
    const handleNothing = () => {
        Alert.alert('Nothing in here')
    }
    const [image, setImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Quyền truy cập vào thư viện ảnh bị từ chối!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Quyền truy cập vào thư viện ảnh bị từ chối!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedAsset = result.assets[0];
            updateSelectedImage(selectedAsset.uri);
        }
    };
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

    const updateSelectedImage = async (uri) => {
        try {
            await AsyncStorage.setItem('selectedImage', uri);
            setSelectedImage(uri);
        } catch (error) {
            console.log('Lỗi khi lưu trạng thái hình ảnh:', error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.title}>
                    <TouchableOpacity style={styles.buttonback} onPress={handleBack}>
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Sửa hồ sơ</Text>
                    <TouchableOpacity style={styles.buttonback} onPress={handleDone}>
                        <Text style={styles.textDone}>
                            Xong
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                        <View style={styles.ContentTOP}>
                            <View style={styles.contentBRAND}>
                                <Text style={styles.TitleContent}>
                                    NHÃN HIỆU
                                </Text>
                                <TouchableOpacity onPress={pickImage} style={styles.Brand}>
                                    {selectedImage ? (
                                        <Image source={{ uri: selectedImage }} style={{ height: 250, width: '100%' }} />
                                    ) : (
                                        <View style={styles.ISContentTOPIcon}>
                                            <View style={styles.IconBRAND}>
                                                <Entypo name="user" size={60} color="white" />
                                            </View>
                                        </View>
                                    )}
                                    <View style={styles.ISContentBOT}>

                                        <View style={styles.ISISMid}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Ảnh hồ sơ</Text>
                                                <Text style={styles.ISContentBOT_textdown}>JPEG, PNG, GIF và dưới 10MB</Text>
                                            </View>
                                            <View style={styles.icon}>
                                                <FontAwesome5 name="pencil-alt" size={24} color="white" />
                                            </View>
                                        </View>

                                        <View style={styles.ISISBot}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Biểu ngữ hồ sơ</Text>
                                                <Text style={styles.ISContentBOT_textdown}>Khuyến nghị 1200x480 và nhỏ hơn 10MB</Text>
                                            </View>
                                            <View style={styles.icon}>
                                                <FontAwesome5 name="pencil-alt" size={24} color="white" />
                                            </View>
                                        </View>
                                    </View>


                                </TouchableOpacity>
                                <View style={[styles.Explain, styles.ExplainBRAND]}>
                                    <Text style={styles.ExplainTEXT}>
                                        Tùy chỉnh diện mạo của bản thân và của kênh trên Trixter.
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTRIXTER}>
                                <Text style={styles.TitleContent}>
                                    VỀ TRIXER
                                </Text>
                                <View style={[styles.ISContentTOP, styles.ISContentBOT]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('IntroYS')} style={styles.Trixter}>
                                        <View style={styles.ISISTop}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Giới thiệu bản thân</Text>
                                                <Text style={styles.ISContentBOT_textdown} numberOfLines={1} ellipsizeMode="tail">
                                                    {value || "Giới thiệu bản thân trong giới hạn 3 câu"}
                                                </Text>
                                            </View>
                                            <View style={styles.icon}>
                                                <AntDesign name="right" size={24} color="white" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleNothing} style={styles.Trixter}>

                                        <View style={styles.ISISMid}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Tên người dùng</Text>
                                                <Text style={styles.ISContentBOT_textdown}>kiyosatemei</Text>
                                            </View>
                                            <View style={styles.icon}>
                                                <AntDesign name="right" size={24} color="white" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleNothing} style={styles.Trixter}>

                                        <View style={styles.ISISBot}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Tên hiển thị</Text>
                                                <Text style={styles.ISContentBOT_textdown}>kiyosatemei</Text>
                                            </View>
                                            <View style={styles.icon}>
                                                <AntDesign name="right" size={24} color="white" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.contentSOCIAL}>
                                <Text style={styles.TitleContent}>
                                    ĐƯỜNG LUÊN KẾT MẠNG XÃ HỘI
                                </Text>
                                <TouchableOpacity onPress={handleNothing} style={styles.Social}>
                                    <View style={[styles.ISContentTOP, styles.ISContentBOT]}>
                                        <View style={styles.ISISOnly}>
                                            <View style={styles.Content}>
                                                <Text style={styles.ISContentBOT_textup}>Quản lý đường liên kết mạng xã hội</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={[styles.Explain, styles.ExplainSOCIAL]}>
                                    <Text style={styles.ExplainTEXT}>
                                        Thêm tối đa 5 đường liên kết mạng xã hội hiển thị trên hồ sơ kênh của bạn. Người xem cũng có ttheer tìm kiếm bạn theo cá chỉ dấu này.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View >
        </View >
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
    contentBRAND: {

    },
    contentTRIXTER: {
        marginTop: 30,
        marginBottom: 30,
    },
    contentSOCIAL: {
        marginBottom: 30,
    },
    ISISTop: {
        flexDirection: 'row',
        marginBottom: 10
    },
    ISISMid: {
        flexDirection: 'row',
        marginBottom: 10
    },
    ISISBot: {
        flexDirection: 'row',
        marginTop: 10
    },
    ISISOnly: {

    },
    CONTENT: {

    },
    Content: {
        flex: 1,
    },
    TitleContent: {
        color: '#9F9EA6',
        fontSize: 18,
        marginBottom: 10
    },
    ContentTOP: {

    },
    Brand: {

    },
    Trixter: {

    },
    Social: {

    },
    ISContentTOPIcon: {
        backgroundColor: '#6933BA',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ISContentTOP: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ISContentBOT: {
        backgroundColor: '#18171C',
        flexDirection: 'column',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    ISContentBOT_textup: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2
    },
    ISContentBOT_textdown: {
        color: 'gray',
        fontSize: 18,
        marginTop: 2,
    },
    IconBRAND: {
        backgroundColor: '#8304B2',
        borderRadius: 50,
        borderColor: '#0E0E10',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    Explain: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },
    ExplainBRAND: {
        marginRight: 30,
    },
    ExplainTEXT: {
        color: 'gray',
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EAEAEC',
        textAlign: 'center',
    },
    textup: {
        marginTop: 13,
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EAEAEC',
        marginLeft: 15,
    },
    textDone: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-end',
    },
    textdown: {
        color: '#A6A5AA',
        marginLeft: 15,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export default ISFixProfile;