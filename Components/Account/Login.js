import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import MSSQL from 'react-native-mssql';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Kết nối với cơ sở dữ liệu SQL Server
      MSSQL.init();
      await MSSQL.connect({
        server: 'DESKTOP-CS1SKJJ\\SQLEXPRESS', 
        database: 'Mobile', // Tên cơ sở dữ liệu
        options: {
          encrypt: true, // Sử dụng mã hóa kết nối
        },
      });

      // Thực hiện truy vấn SQL để kiểm tra tài khoản
      const query = `SELECT * FROM Account WHERE username = '${username}' AND password = '${password}'`;
      const result = await MSSQL.executeQuery(query);

      // Kiểm tra kết quả truy vấn
      if (result.length > 0) {
        // Tài khoản hợp lệ, chuyển đến màn hình Account
        navigation.navigate('NavBOT');
      } else {
        // Tài khoản không hợp lệ, xử lý logic tương ứng
      }

      // Đóng kết nối SQL Server
      await MSSQL.close();
    } catch (error) {
      console.error('Error connecting to SQL Server:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Các trường đăng nhập */}
      <TextInput
        style={styles.username}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.password}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Nút đăng nhập */}
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    borderColor: 'red',
    borderWidth: 2,
    height: 50,
  },
  password: {
    borderColor: 'blue',
    borderWidth: 2,
    height: 50,
  },
});

export default Login;