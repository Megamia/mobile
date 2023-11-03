import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';

const Search = () => {

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.search}>
          <TextInput
            style={styles.textInput}
            placeholder="Tìm kiếm"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    backgroundColor: '#3E3E40',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    
  },
});

export default Search;