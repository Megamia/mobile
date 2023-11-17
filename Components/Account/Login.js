// import React, { useState } from 'react';
// import { View, Button, TextInput, StyleSheet, Alert } from 'react-native';
// import sql from 'mssql';

// const Login = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const config = {
//       server: 'DESKTOP-CS1SKJJ\\SQLEXPRESS',
//       port: '1433',
//       database: 'mobile',
//       user: 'sa',
//       password: 'sa',
//     };

//     const pool = new sql.ConnectionPool(config);

//     pool.connect().then(() => {
//       console.log('Connected to SQL Server');

//       const request = new sql.Request(pool);
//       const query = `SELECT * FROM Account WHERE username='${username}' AND password='${password}'`;

//       request.query(query).then((result) => {
//         if (result.recordset.length > 0) {
//           Alert.alert('Thành công', 'Đăng nhập thành công');
//           navigation.navigate('NavBOT');
//         } else {
//           Alert.alert('Lỗi', 'Tên người dùng hoặc mật khẩu không chính xác');
//         }
//       }).catch((err) => {
//         console.error('Error executing query:', err);
//       });
//     }).catch((err) => {
//       console.error('Error connecting to SQL Server:', err);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.username}
//         placeholder="Username"
//         value={username}
//         onChangeText={(text) => setUsername(text)}
//       />
//       <TextInput
//         style={styles.password}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />

//       <Button title="Đăng nhập" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   username: {
//     borderColor: 'red',
//     borderWidth: 2,
//     height: 50,
//   },
//   password: {
//     borderColor: 'blue',
//     borderWidth: 2,
//     height: 50,
//   },
// });

// export default Login;