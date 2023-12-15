// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
// import NavTOP from '../Home/NavTOP';
// import { FontAwesome, Octicons } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const DTStream = () => {
// const navigation = useNavigation();
//     const route = useRoute();
//     const { itemId } = route.params;
  
//   const listchannel = [
//     { id: 1, userimg: require('../../assets/img/tenha-user.png'), username: 'Tenha', video: require('../../assets/gif/honkai-star-rail-combat-system-8.gif'),category: 'Honkai: Star Rail', content: 'HSR Genshin dailies and OW after', countview: '4.490' },
//     { id: 2, userimg: require('../../assets/img/maichuxo-user.png'), username: 'maichuxo', video: require('../../assets/gif/minecraft.gif'),category: 'Minecraft', content: 'play minecraft with maichuxo and sing', countview: '1.690' },
//     { id: 3, userimg: require('../../assets/img/Ayellol-user.png'), username: 'Ayellol', video: require('../../assets/gif/lol-lesin.gif'),category: 'League of Legends', content: '[DIA 16] AYEL KOREA ARC BOOTCA...', countview: '8.566' },
//     { id: 4, userimg: require('../../assets/img/ProfessionalPridER.png'), username: 'ProfessionalPridER', video: require('../../assets/gif/genshincombat.gif'),category: 'Genshin Impact', content: 'Under the tree-eee-eee | !yt !disco...', countview: '3.449' },
//   ];


//   return (
//     <View style={styles.container}>
//       {listchannel.map((item) => {
//         if (item.id === itemId) {
//           return (         
//               <View style={styles.view}>
//                 <Image source={item.userimg} style={styles.userImage} />
//                 <Text style={styles.username}>{item.username}</Text>
//                 <Image source={item.video} style={styles.videoImage} />
//                 <Text style={styles.category}>{item.category}</Text>
//                 <Text style={styles.content}>{item.content}</Text>
//                 <Text style={styles.countview}>{item.countview} views</Text>
//               </View>
//           );
//         }
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0E0E10',
//   },
// });

// export default DTStream;