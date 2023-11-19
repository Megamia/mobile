import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';

const Mychannel = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.iconback}>
                    <TouchableOpacity style={styles.iconL} onPress={handleGoBack}>
                    <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.Editview}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.text}>
                            Sửa hồ sơ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    head: {
        flexDirection: "row",
        height: 130,
        backgroundColor: "#6532B2",
        justifyContent:"space-between"
    },
    iconback: {
        marginTop: 30,
        marginLeft:17,
        borderRadius:22,
        width:35,
        height:35,
        backgroundColor:'#301653',
        alignItems:'center',
        justifyContent:'center',
    },
    iconL: {
        // color: 'black',
        // fontSize: 30,
    },
    Editview: {
        marginTop: 30,
        margin:17,
        backgroundColor:'#301653',
        borderRadius:25,
        width:90,
        height:40,
        alignItems:'center',
        justifyContent:'center',

    },
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight:'bold',
        // borderColor:'blue',
        // borderWidth:2
    }
});

export default Mychannel;