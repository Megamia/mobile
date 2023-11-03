import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Top = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                hello world
            </Text>
        </View>
    );
};
export default Top;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        position:'relative',
    },
    text:{
        fontSize:30,
        position:'absolute',
        top:0
    }
})