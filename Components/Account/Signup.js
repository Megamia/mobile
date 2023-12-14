import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity, Keyboard, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as FileSystem from 'expo-file-system';

const Signup = () => {
    const navigation = useNavigation();
    const handleGoBack = () =>{
        navigation.goBack();
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [animatedValue] = useState(new Animated.Value(0));
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleSignup = async () => {
        const users = await getUsersFromJSON();
        const userExists = users.find(user => user.username === username);

        if (userExists) {
            Alert.alert('Đăng ký thất bại', 'Người dùng đã tồn tại');
        } else {
            const newUser = { username: username, password: password };
            users.push(newUser);

            await saveUsersToJSON(users);
            Alert.alert('Đăng ký thành công');
            handleGoBack();
        }
    };

    const getUsersFromJSON = async () => {
        try {
            const fileUri = `${FileSystem.documentDirectory}users.json`;
            const fileContent = await FileSystem.readAsStringAsync(fileUri);
            const users = JSON.parse(fileContent);
            return users;
        } catch (error) {
            console.error('Lỗi khi đọc tệp JSON:', error);
            return [];
        }
    };

    const saveUsersToJSON = async (users) => {
        try {
            const fileUri = `${FileSystem.documentDirectory}users.json`;
            await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(users));
        } catch (error) {
            console.error('Lỗi khi lưu tệp JSON:', error);
        }
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
        setIsButtonDisabled(text === '' || password === '');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsButtonDisabled(username === '' || text === '');
    };
    const toggleSecureTextEntry = () => {
        setSecureTextEntry((prevValue) => !prevValue);
    };
    const [isFocused, setIsFocused] = useState('');
    const handleFocus = (input) => {
        if (input === 'username') {
            setIsFocused('username');
        } else if (input === 'password') {
            setIsFocused('password');
        }
    };

    const handleBlur = () => {
        setIsFocused('');
    };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            Animated.timing(animatedValue, {
                toValue: -100,
                duration: 200,
                useNativeDriver: true,
            }).start();
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 180,
                useNativeDriver: true,
            }).start();
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [animatedValue]);
    const handleLinkPress = () => {
        Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewtitle}>
                <TouchableOpacity style={styles.icon} onPress={handleGoBack}>
                    <View style={styles.viewicon}>
                        <Feather name="chevron-left" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Đăng ký
                </Text>
            </View>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === 'ios'}
            >
                <Animated.View style={[styles.viewform, { transform: [{ translateY: animatedValue }] }]}>
                    <View style={styles.form}>
                        <Text style={styles.text}>
                            Tên người dùng
                        </Text>
                        <TextInput
                            style={[styles.textinput, isFocused === 'username' && styles.formFocused]}
                            value={username}
                            onChangeText={handleUsernameChange}
                            onFocus={() => handleFocus('username')}
                            onBlur={handleBlur}
                            selectionColor={'#C193FF'}
                            keyboardAppearance="dark"
                        />
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.text}>Mật khẩu</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[styles.textinput, isFocused === 'password' && styles.formFocused]}
                                value={password}
                                onChangeText={handlePasswordChange}
                                onFocus={() => handleFocus('password')}
                                onBlur={handleBlur}
                                selectionColor={'#C193FF'}
                                secureTextEntry={secureTextEntry}
                                keyboardAppearance="light"
                            />
                            <Ionicons
                                name={secureTextEntry ? 'eye' : 'eye-off'}
                                size={24}
                                color="white"
                                style={[styles.eyeIcon, isFocused === 'password' && styles.iconfocuse]}
                                onPress={toggleSecureTextEntry}
                            />
                        </View>
                    </View>
                    <View style={styles.rules}>
                        <Text style={styles.text2}>
                            Nhấn vào Đăng ký đồng nghĩa với việc bạn đồng ý với
                            <TouchableOpacity onPress={handleLinkPress}>
                                <View style={styles.viewrules}>
                                    <Text style={styles.textrules}> Điều khoản dịch vụ </Text>
                                </View>
                            </TouchableOpacity>
                            của Trixter và công nhận hiệu lực của
                            <TouchableOpacity onPress={handleLinkPress}>
                                <View style={styles.viewrules}>
                                    <Text style={styles.textrules}> Thông báo về quyền riêng tư </Text>
                                </View>
                            </TouchableOpacity>
                            của chúng tôi
                        </Text>
                    </View>
                    <TouchableOpacity onPress={handleSignup} disabled={isButtonDisabled}>
                        <View style={[styles.viewbtn, { backgroundColor: isButtonDisabled ? '#3E3E40' : '#C193FF' }]}>
                            <Text style={[styles.text1, { color: isButtonDisabled ? 'gray' : 'white' }]}>
                                Đăng ký
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
    },
    container: {
        flex: 1,
        backgroundColor: '#0E0E10',
        paddingLeft: 5,
        paddingRight: 15
    },
    viewtitle: {
        marginTop: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginRight: 130
    },
    viewform: {
        flex: 1,
        paddingTop: 150
    },
    form: {
        paddingLeft: 10,
        marginBottom: 20
    },
    formFocused: {
        borderWidth: 2,
        borderColor: '#C193FF',
    },
    text: {
        fontSize: 25,
        color: 'white',
        marginBottom: 5
    },
    text1: {
        fontSize: 25,
        color: 'gray',
    },
    text2: {
        fontSize: 15,
        color: 'gray',
        // textAlign: 'left',
        // marginBottom:30
    },
    rules: {
        marginTop: 10,
        paddingLeft: 10,
    },
    viewrules: {
        top: 3
    },
    textrules: {
        color: '#A063FF',
        fontSize: 15,

        // marginTop:10
    },
    textinput: {
        height: 50,
        backgroundColor: '#3E3E40',
        borderRadius: 7,
        color: 'white',
        paddingLeft: 10,
        fontSize: 25,
    },
    viewbtn: {
        marginTop: 30,
        height: 50,
        backgroundColor: '#3E3E40',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    formFocused: {
        backgroundColor: '#0E0E10',
        borderColor: '#C193FF',
        borderWidth: 2
    },
    inputContainer: {
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 12,
        display: 'none'
    },
    iconfocuse: {
        display: 'flex'
    }
});

export default Signup;