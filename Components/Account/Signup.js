import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

const Signup = () => {
    const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      navigation.navigate('Login');
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.a}
        placeholder="Tên người dùng"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.a}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng ký" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  a: {
    marginBottom: 30,
  },
});

export default Signup;