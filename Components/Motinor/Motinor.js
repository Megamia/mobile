import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavTOP from '../Home/NavTOP';

const Motinor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <NavTOP />
      </View>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[1, 3, 5]}>
        <View style={styles.main}>
          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.text}>Screen Theo dõi</Text>
            </View>
            <View style={styles.contentS}>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
            </View>
          </View>

          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.text}>Screen Theo dõi1</Text>
            </View>
            <View style={styles.contentS}>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
            </View>
          </View>

          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.text}>Screen Theo dõi2</Text>
            </View>
            <View style={styles.contentS}>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
            </View>
          </View>
          
          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.text}>Screen Theo dõi</Text>
            </View>
            <View style={styles.contentS}>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
            </View>
          </View>

          <View style={styles.contentL}>
            <View style={styles.title}>
              <Text style={styles.text}>Screen Theo dõi</Text>
            </View>
            <View style={styles.contentS}>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
              <Text style={styles.text}>
                abc
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
  },
  top: {
    height: 85,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
  },
  contentL: {
  },
  contentS:{
    
  },
  main:{
    marginLeft:10,
    marginRight:10
  },
  
  title:{
    backgroundColor:'red'
  }
});

export default Motinor;