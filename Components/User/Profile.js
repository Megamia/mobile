import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>
                hello world
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Text:{
        color:'black',
        fontSize:30
    }
});

export default Profile;