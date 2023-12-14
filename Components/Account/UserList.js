import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';

const UserList = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromJSON();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  const getUsersFromJSON = async () => {
    try {
      const fileUri = `${FileSystem.documentDirectory}users.json`;
      const fileContent = await FileSystem.readAsStringAsync(fileUri);
      let users = JSON.parse(fileContent);
  
      const adminIndex = users.findIndex(user => user.username === 'admin');
      if (adminIndex === -1) {
        const adminUser = { username: 'Admin', password: '123' };
        users.unshift(adminUser); 
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(users));
      } else {
        const adminUser = users.splice(adminIndex, 1)[0];
        users.unshift(adminUser);
      }
  
      return users;
    } catch (error) {
      console.error('Lỗi khi đọc tệp JSON:', error);
      return [];
    }
  };

  const deleteUserFromJSON = async (username) => {
    try {
      const fileUri = `${FileSystem.documentDirectory}users.json`;
      const fileContent = await FileSystem.readAsStringAsync(fileUri);
      const users = JSON.parse(fileContent);
      const updatedUsers = users.filter(user => user.username !== username);
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(updatedUsers));
      return updatedUsers;
    } catch (error) {
      console.error('Lỗi khi xoá người dùng từ tệp JSON:', error);
      return [];
    }
  };

  const handleDeleteUser = async (username) => {
    if (username === 'Admin') {
      Alert.alert('Không thể xoá tài khoản admin');
      return;
    }
  
    const updatedUsers = await deleteUserFromJSON(username);
    setUsers(updatedUsers);
    Alert.alert('Xoá người dùng thành công');
  };

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <View key={index} style={styles.user}>
          <View style={styles.account}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.password}>{user.password}</Text>
          </View>
          {user.username !== 'admin' && (
            <View style={styles.delete}>
              <TouchableOpacity onPress={() => handleDeleteUser(user.username)}>
                <View style={styles.button}>
                  <Text style={styles.text}>
                    Xoá
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
      <View style={styles.back}>
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.buttonback}>
            <Text style={styles.text}>
              Quay lại
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
    marginTop: 100,
    paddingHorizontal: 20,
  },
  user: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  password: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#772CE8',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  back: {
    alignItems: 'center',
    marginTop: 30
  },
  buttonback: {
    backgroundColor: '#772CE8',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default UserList;