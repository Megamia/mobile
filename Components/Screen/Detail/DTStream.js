import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import { Feather, Octicons, AntDesign, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';

const DTStream = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { itemId } = route.params;

    const [isVisible, setIsVisible] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const handlePressNULL = () => {
        Alert.alert('Thông báo', 'Chưa làm');
    };

    useEffect(() => {
        let timeoutId = null;

        const hideContent = () => {
            setIsVisible(false);
            setTimerId(null);
        };

        const startTimer = () => {
            timeoutId = setTimeout(hideContent, 5000); // 20 giây
            setTimerId(timeoutId);
        };

        const resetTimer = () => {
            clearTimeout(timeoutId);
            startTimer();
        };

        const clearTimer = () => {
            clearTimeout(timeoutId);
            setTimerId(null);
        };

        if (isVisible) {
            startTimer();
        }

        return clearTimer;
    }, [isVisible]);

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
            clearTimeout(timerId);
            setTimerId(null);
        } else {
            setIsVisible(true);
        }
    };
    const handlePress = () => {
        navigation.goBack();
    };

    const listchannel = [
        { id: 1, userimg: require('../../../assets/img/tenha-user.png'), username: 'Tenha', video: require('../../../assets/gif/honkai-star-rail-combat-system-8.gif'), category: 'Honkai: Star Rail', content: 'HSR Genshin dailies and OW after', countview: '4.490', time: '39:10' },
        { id: 2, userimg: require('../../../assets/img/maichuxo-user.png'), username: 'maichuxo', video: require('../../../assets/gif/minecraft.gif'), category: 'Minecraft', content: 'play minecraft with maichuxo and sing', countview: '1.690', time: '39:10' },
        { id: 3, userimg: require('../../../assets/img/Ayellol-user.png'), username: 'Ayellol', video: require('../../../assets/gif/lol-lesin.gif'), category: 'League of Legends', content: '[DIA 16] AYEL KOREA ARC BOOTCA...', countview: '8.566', time: '39:10' },
        { id: 4, userimg: require('../../../assets/img/ProfessionalPridER.png'), username: 'ProfessionalPridER', video: require('../../../assets/gif/genshincombat.gif'), category: 'Genshin Impact', content: 'Under the tree-eee-eee | !yt !disco...', countview: '3.449', time: '39:10' },
    ];


    const selectedItem = listchannel.find(item => item.id === itemId);

    if (!selectedItem) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <TouchableOpacity activeOpacity={1} onPress={handleClick}>
                    <Image source={selectedItem.video} style={styles.videoImage} />
                    {isVisible &&
                        <BlurView style={styles.viewbottominvideo} tint="dark" intensity={3}>
                            <View style={styles.viewtime}>
                                <Octicons name="dot-fill" style={styles.dotlive} />
                                <Text style={styles.texttime}>{selectedItem.time}</Text>
                            </View>
                            <View style={styles.viewcount}>
                                <Feather name="user" style={styles.iconuser} />
                                <Text style={styles.textcount}>{selectedItem.countview}</Text>
                            </View>
                            <TouchableOpacity onPress={handlePressNULL} style={styles.viewrotation}>
                                <MaterialIcons name="screen-rotation" style={styles.iconrotation} />
                            </TouchableOpacity>
                        </BlurView>}
                    {isVisible &&
                        <BlurView style={styles.viewtopinvideo} tint="dark" intensity={3}>
                            <TouchableOpacity onPress={handlePress}>
                                <AntDesign name="left" style={styles.backicon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressNULL} style={styles.viewsetting}>
                                <AntDesign name="setting" style={styles.iconsetting} />
                            </TouchableOpacity>
                        </BlurView>}
                    {isVisible &&
                        <BlurView style={styles.viewcenterinvideo} tint="dark" intensity={3}>
                            <TouchableOpacity onPress={handlePressNULL} style={styles.viewpause}>
                                <Entypo name="controller-paus" style={styles.iconpause} />
                            </TouchableOpacity>
                        </BlurView>}
                </TouchableOpacity>
                {isVisible &&
                    <View style={styles.info}>
                        <View style={styles.infotop}>
                            <Image source={selectedItem.userimg} style={styles.userImage} />
                            <View style={styles.infodetail}>
                                <Text style={styles.username}>{selectedItem.username}</Text>
                                <Text style={styles.content}>{selectedItem.content}</Text>
                                <Text style={styles.category}>{selectedItem.category}</Text>
                            </View>
                            <TouchableOpacity style={styles.follow} onPress={handlePressNULL}>
                                <Text style={styles.followtext}>Theo Dõi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infobottom}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={styles.startbox}></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>Asia</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>Anime</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>sus</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>Ayel</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>Toplane</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>English</Text></View>
                                <View style={styles.categorybox}><Text style={styles.categorytext}>lol</Text></View>
                            </ScrollView>
                        </View>
                    </View>
                }
                <View style={styles.title}>
                    <Text style={styles.texttitle}>TÁN GẪU</Text>
                </View>
                <ScrollView style={styles.ScrollViewChat}>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Viet Anh: </Text>
                        <Text style={styles.chatuser}>Hay</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Dat: </Text>
                        <Text style={styles.chatuser}>Nice Stream</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Peter: </Text>
                        <Text style={styles.chatuser}>Good Job</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Aatrox: </Text>
                        <Text style={styles.chatuser}>Funny</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Hwei: </Text>
                        <Text style={styles.chatuser}>🧡❤🧡🧡❤🧡</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Ahri: </Text>
                        <Text style={styles.chatuser}>🤘🔥🔥🔥🔥</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Akali: </Text>
                        <Text style={styles.chatuser}>More!</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Jasuo: </Text>
                        <Text style={styles.chatuser}>Hasagi</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Yone: </Text>
                        <Text style={styles.chatuser}>Let goooooooooooooooooooooooooo</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Xe rac: </Text>
                        <Text style={styles.chatuser}>Supreme</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Kirito: </Text>
                        <Text style={styles.chatuser}>Asuna is the best</Text>
                    </View>
                    <View style={styles.chat}>
                        <Text style={styles.nameuser}>Anh da den: </Text>
                        <Text style={styles.chatuser}>Ăn ba tô cơm 💦💦💦</Text>
                    </View>
                    <View style={styles.chatend}></View>
                </ScrollView>
            </View>
            <View style={styles.chatinput}>
                <TextInput
                style={styles.textInput}
                placeholder="Gửi tin nhắn"
                placeholderTextColor={styles.placeholder.color}
                />
                <TouchableOpacity onPress={handlePressNULL} style={styles.viewsend}>
                <FontAwesome name="send" size={24} color="white" />
                </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        flex: 1,
        backgroundColor: '#0E0E10',
    },
    videoImage: {
        width: 390,
        height: 220,
        objectFit: 'cover',
    },
    dotlive: {
        color: 'red',
        fontSize: 17,
        marginRight: 5,
    },
    backicon: {
        color: 'white',
        fontSize: 27,
    },
    texttime: {
        color: 'white',
    },
    viewbottominvideo: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        bottom: 0,
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',

        paddingVertical: 5,
    },
    viewtopinvideo: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        top: 0,
        paddingVertical: 5,
    },
    viewcount: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 5,
    },
    viewtime: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 7,
        paddingVertical: 4,
    },
    iconuser: {
        color: 'white',
        fontSize: 23,
        marginRight: 3,
    },
    textcount: {
        color: 'white',
    },
    username: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    content: {
        color: '#A8A7B0',
        fontSize: 17,
    },
    category: {
        color: '#A8A7B0',
        fontSize: 20,
    },
    userImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 10,
    },
    info: {
        padding: 10,
        width: '100%',
        borderColor: '#A8A7B0',
        borderBottomWidth: 0.2,
    },
    infotop: {
        flexDirection: 'row',
    },
    infodetail: {
        width: 210,
    },
    follow: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#782CE8',
        height: 32,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    followtext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    title: {
        width: '100%',
        justifyContent: 'center',
        borderColor: '#A8A7B0',
        borderBottomWidth: 0.2,
    },
    texttitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    categorybox: {
        backgroundColor: '#323234',
        borderRadius: ' 50%',
        marginRight: 4,
    },
    categorytext: {
        color: '#C3C3C5',
        fontWeight: 'bold',
        fontSize: 13,
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 8,
        paddingLeft: 8,
    },
    startbox: {
        width: 60,
    },
    iconrotation: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    viewrotation: {
        position: 'absolute',
        right: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconsetting: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    viewsetting: {
        position: 'absolute',
        right: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewcenterinvideo: {
        position: 'absolute',
        top: '40%',
        left: '45%',
    },
    iconpause: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    viewpause: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    chat: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    nameuser: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    chatuser: {
        color: '#A8A7B0',
        fontSize: 15,
    },
    chatinput:{
        position:'absolute',
        bottom:0,
        paddingBottom:40,
        backgroundColor: '#0E0E10',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical:10,
    },
    textInput:{
        backgroundColor: 'gray',
        paddingHorizontal: 15,
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
    },
    placeholder:{
        color: 'white',
    },
    chatend:{
        paddingBottom:30,
    },
    ScrollViewChat:{
        height:'60%'
    },
    viewsend:{
        justifyContent:'center',
        marginLeft:10,
    }
});

export default DTStream;