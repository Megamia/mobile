import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState(['Tìm kiếm gần đây']);
  const [showFullHistory, setShowFullHistory] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory(prevHistory => {
        if (prevHistory[0] === 'Tìm kiếm gần đây') {
          return [...prevHistory, searchTerm];
        } else {
          return [searchTerm, ...prevHistory];
        }
      });
      setSearchTerm('');
      setShowFullHistory(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory(prevHistory => {
        if (prevHistory[0] === 'Tìm kiếm gần đây') {
          return [...prevHistory, searchTerm];
        } else {
          return [searchTerm, ...prevHistory];
        }
      });
      setSearchTerm('');
      setShowFullHistory(false);
    }
  };

  const removeSearchTerm = (index) => {
    setSearchHistory(prevHistory => {
      const newHistory = [...prevHistory];
      newHistory.splice(index, 1);
      return newHistory;
    });
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.textInput}
          placeholder="Tìm kiếm"
          placeholderTextColor={styles.placeholder.color}
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          onSubmitEditing={handleSearchSubmit}
        />
        {searchTerm !== '' && (
          <TouchableOpacity onPress={clearSearchTerm}>
            <View style={[styles.viewSearchTerm, styles.circularView]}>
              <Text style={styles.clearButton}>X</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.column}>
        <FlatList
          style={styles.FlatList}
          data={searchHistory}
          renderItem={({ item, index }) => (
            <View style={styles.historyItemContainer}>
              {item !== 'Tìm kiếm gần đây' && (
              <Octicons style={styles.icon} name="history" size={23} color="gray" />
              )}
              <Text style={styles.historyItem}>{item}</Text>
              {item !== 'Tìm kiếm gần đây' && (
                <TouchableOpacity onPress={() => removeSearchTerm(index)}>
                  <Text style={styles.removeButton}>x</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          keyExtractor={(item, index) => `history-${index}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
    alignItems: 'center',
  },
  search: {
    marginTop: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#3E3E40',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    color: '#ACABB3',
    marginLeft: 15,
    fontSize: 17
  },
  placeholder: {
    color: '#ACABB3',
  },
  column: {
    flex: 1,
    backgroundColor: '#0E0E10',
    justifyContent:'center',
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
  FlatList: {
    marginTop: 15,
    marginHorizontal: 5,
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  historyItem: {
    flex: 1,
    fontSize: 16,
    marginBottom: 8,
    color: '#ACABB3',
    
  },
  removeButton: {
    color: '#ACABB3',
    fontSize: 16,
    marginBottom: 8,
    marginRight: 10
  },
  icon:{
    marginBottom: 4,
    color: '#ACABB3',
    marginRight:10
  },
  clearButton: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
  },
  viewSearchTerm: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginRight: 10
  },
  circularView: {
    borderRadius: 80,
  },
});

export default Search;