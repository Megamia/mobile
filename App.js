import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);

    if (username === 'admin' && password === '123') {
      setShowForm(true);
      setShowAlert(false);
    } else {
      setShowForm(false);
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      {!showLogin && (
        <View>
          <Button title="Login" onPress={() => setShowLogin(true)} />
        </View>
      )}
      {showLogin && !showForm && (
        <View style={styles.alertContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {showAlert && (
            <Text style={styles.alertText}>Thông tin tài khoản không chính xác</Text>
          )}
          <Button title="Đăng nhập" onPress={handleLogin} />
        </View>
      )}
      {showForm && (
        <View>
          <Text style={styles.alertText}>Đăng nhập thành công!</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  alertText: {
    color: 'red',
    marginBottom: 10,
  }
});