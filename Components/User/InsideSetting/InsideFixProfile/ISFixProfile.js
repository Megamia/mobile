import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ISFixProfile = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                hello world
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:'black',
    }
})

export default ISFixProfile;