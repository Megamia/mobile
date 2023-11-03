import React from "react";
import { View, StyleSheet } from "react-native";
import Bot from "../Nav/Bot";
const Home = () => {
    return (
        <View style={styles.container}>
                {/* <View style={styles.viewhead}>
            </View> */}
                <Bot />
        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    // viewhead: {

    // },
    text: {
        fontSize: 30,
        color: 'black',
    },
});