import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openScreen2 = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Nội dung của screen1 */}
      <Button title="Mở screen2" onPress={openScreen2} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Nội dung của screen2 */}
          <Button title="Đóng" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Screen1;