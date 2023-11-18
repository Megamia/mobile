// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { AntDesign, Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const Mychannel = () => {
//     const navigation = useNavigation();
//     const handleGoBack = () => {
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.container}>
//             <LinearGradient
//                 colors={['#6532B2', '#9E87D2']}
//                 style={styles.head}
//             >
//                 <View style={styles.iconback}>
//                 <TouchableOpacity style={styles.iconL} onPress={handleGoBack}>
//                     <AntDesign name="leftcircle" size={24} color="#2E1751" />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.Editview}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//                     <Text style={styles.text}>
//                         Sửa hồ sơ
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//             </LinearGradient>
            

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     head:{
//         flexDirection:"row",
//         height:300,
//         backgroundColor:"#6532B2"
//     },
//     iconback: {
//         alignSelf:"flex-start",
//         marginTop: 100,
//         // borderColor:'red',
//         // borderWidth:2,
//     },
//     iconL: {
//         // color: 'black',
//         // fontSize: 30,
//     },
//     Editview:{
//         marginTop: 100,
//     },
//     text:{
//         color:'black',
//         fontSize:30,
//         // borderColor:'blue',
//         // borderWidth:2
//     }
// });

// export default Mychannel;