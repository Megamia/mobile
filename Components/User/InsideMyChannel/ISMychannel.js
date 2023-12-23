import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ISMychannel = () => {
    const navigation = useNavigation();
    const handleGoBack = async () => {
        try {
            await AsyncStorage.setItem('selectedImage', selectedImage);
            navigation.goBack();
        } catch (error) {
            console.log('Lỗi khi lưu trạng thái hình ảnh đã chọn:', error);
        }
    };
    const handleClick = () => {
        Alert.alert('Chưa làm');
    }
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
            <View style={styles.head}>
                <View style={styles.iconback}>
                    <TouchableOpacity style={styles.iconL} onPress={handleGoBack}>
                        <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.Editview}>
                    <TouchableOpacity onPress={() => navigation.navigate('ISFixProfile')}>
                        <Text style={styles.text}>
                            Sửa hồ sơ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.infor}>
                    <View style={styles.viewimg}>
                        {selectedImage ? (
                            <Image source={{ uri: selectedImage }} style={styles.img} />
                        ) : (
                            <Entypo name="user" size={24} color="white" />
                        )}
                    </View>
                    <View style={styles.name_status}>
                        <Text style={styles.name}>
                            Kiyosatomei
                        </Text>
                        <Text style={styles.status}>
                            Ngoại tuyến
                        </Text>
                    </View>
                </View>
                <View style={styles.follow}>
                    <Text style={styles.status}>
                        0 người theo dõi
                    </Text>
                </View>
                <TouchableOpacity onPress={(handleClick)}>
                    <View style={styles.dashboard}>
                        <Text style={styles.textdashboard}>
                            Xem bảng điều khiển
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    head: {
        flexDirection: "row",
        height: 130,
        backgroundColor: "#6532B2",
        justifyContent: "space-between",
        position: 'relative',
    },
    iconback: {
        marginTop: 30,
        marginLeft: 17,
        borderRadius: 22,
        width: 35,
        height: 35,
        backgroundColor: '#301653',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconL: {
        // color: 'black',
        // fontSize: 30,
    },
    Editview: {
        marginTop: 30,
        margin: 17,
        backgroundColor: '#301653',
        borderRadius: 25,
        width: 90,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        // borderColor:'blue',
        // borderWidth:2
    },
    main: {
        flex: 1,
        backgroundColor: '#0E0E10',
        paddingHorizontal: 15
    },
    infor: {
        flexDirection: 'row',
        position: 'relative',
        top: -10
    },
    viewimg: {
        width: 100,
        height: 100,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    name_status: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    status: {
        color: '#E0E0E2',
        fontSize: 15,
    },
    follow: {
        marginTop: 10
    },
    dashboard: {
        backgroundColor: '#323234',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        marginTop: 10
    },
    textdashboard: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default ISMychannel;