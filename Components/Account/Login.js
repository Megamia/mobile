import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity, Keyboard, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as FileSystem from 'expo-file-system';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [animatedValue] = useState(new Animated.Value(0));

    const navigation = useNavigation();
    const handleDone = () => {
        navigation.goBack();
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

    const handleLogin = async () => {
        try {
          const fileUri = FileSystem.documentDirectory + 'users.json';
          const fileContent = await FileSystem.readAsStringAsync(fileUri);
      
          const users = JSON.parse(fileContent);
      
          const user = users.find(u => u.username === username && u.password === password);
          if (user) {
            Alert.alert('Đăng nhập thành công');
            navigation.navigate('NavBOT');
          } else {
            Alert.alert('Đăng nhập thất bại');
          }
        } catch (error) {
          console.error('Lỗi khi đọc tệp users.json:', error);
        }
      };
    const toggleSecureTextEntry = () => {
        setSecureTextEntry((prevValue) => !prevValue);
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

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleUsernameChange = (text) => {
        setUsername(text);
        setIsButtonDisabled(text === '' || password === '');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsButtonDisabled(username === '' || text === '');
    };

    useEffect(() => {
        const backgroundColor = isButtonDisabled ? 'gray' : '#C193FF';
        styles.viewbtn.backgroundColor = backgroundColor;
    }, [isButtonDisabled]);

    return (
        <View style={styles.container}>
            <View style={styles.viewtitle}>
                <Text style={styles.title}>
                    Đăng nhập
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
                    <TouchableOpacity onPress={handleLogin} disabled={isButtonDisabled}>
                        <View style={[styles.viewbtn, { backgroundColor: isButtonDisabled ? '#3E3E40' : '#C193FF' }]}>
                            <Text style={[styles.text1, { color: isButtonDisabled ? 'gray' : 'white' }]}>
                                Đăng nhập
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        // height:'100%',
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
    },
    title: {
        color: 'white',
        fontSize: 30,
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
    textinput: {
        height: 50,
        backgroundColor: '#3E3E40',
        borderRadius: 7,
        color: 'white',
        paddingLeft: 10,
        fontSize: 25,
    },
    viewbtn: {
        marginTop: 20,
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
        // backgroundColor:'red',
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

export default Login;