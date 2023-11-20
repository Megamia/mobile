import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>VN</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Game</Text>
                    <Text style={styles.text2}>Call of Duty: Mobile</Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>DJ</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Nhạc dân gian</Text>
                    <Text style={styles.text2}>Thay thế</Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>ne</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Chương trình trò chuyện</Text>
                    <Text style={styles.text2}></Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>rổ</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Thể thao</Text>
                    <Text style={styles.text2}>Bóng chày Bóng </Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>nh</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Du lịch & Ngoài trời</Text>
                    <Text style={styles.text2}>Động vật</Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>nay</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Chỉ trò chuyện</Text>
                    <Text style={styles.text2}>Tin tức Singapore</Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>ng</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Thực phẩm & Đồ uống</Text>
                    <Text style={styles.text2}>Sạch</Text>
                </View>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.first}>
                    <Text style={styles.text1}>ch</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.text}>Sự kiện đặc biệt</Text>
                    <Text style={styles.text2}> Bình luận</Text>
                </View>
            </View>

            <View style={styles.intro}>
                <Text style={styles.text3}>
                    Nơi mang đến mọi trải nghiệm dành cho bạn
                </Text>
            </View>
            
            <View style={styles.account}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.button}>
                        <Text style={styles.text4}>
                            Đăng nhập
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.button1}>
                        <Text style={styles.text5}>
                            Đăng ký
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
        paddingTop: 90,
        backgroundColor: "#9246FF",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10
    },
    account: {
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 50,
        justifyContent: 'space-between',

    },
    button: {
        backgroundColor: '#A063FF',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    button1: {
        backgroundColor: 'white',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: 'Helvetica'
    },
    text1: {
        color: '#7D30ED',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: "right",
        fontFamily: 'Helvetica'
    },
    text2: {
        color: '#7D30ED',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: "right",
        fontFamily: 'Helvetica',
        marginLeft: 10,
    },
    text3: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 47,
    },
    text4: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    text5: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    end: {
        flexDirection: "row",
        alignItems: "center",
    },
    first: {
        width: 60,
        marginLeft: -23,
    },
});

export default Intro;