import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Fontisto, EvilIcons, MaterialIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = () => {
    const navigation: any = useNavigation();
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.profileText}>Profile</Text>
            </View>
            {/* öne çıkan div */}
            <View style={styles.card}>
                {/* Foto yuklenmediğinde veya kullanıcı foto koymak istemediğinde alttaki View görünecek */}
                <View style={styles.profileView}>
                    <Image source={require('../assets/examples/pp.jpg')} style={styles.profilePhoto} />
                </View>

                <Fontisto name="player-settings" size={25} color={"#454545"} style={styles.settingIcon} />
                <Text style={styles.nameText}>Daria Eichler</Text>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.line}>
                            <MaterialCommunityIcons name="account-edit" size={30} color={"#727272"} style={styles.icon} />
                            <Text style={styles.settingName}>Sample1</Text>
                            <EvilIcons name="chevron-right" size={50} color={"#D2D2D2"} style={styles.nextIcon} />
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>
            {/* geri ve kaydet butonlarının oldugu kısım */}
            <View style={styles.down}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                >
                    {/* geri butonu ve iconu */}
                    <View style={styles.backArea}>
                        <MaterialIcons name="keyboard-backspace" size={30} color={"#333333"} />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity>
                    {/* kaydet butonu ve yazısı */}
                    <View style={styles.saveArea}>
                        <Text style={{ color: 'white', fontSize: windowWidth * 0.05 }}>SAVE</Text>
                    </View>

                </TouchableOpacity >

            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#7A78D4',
        height: windowHeight * 0.3,
        width: windowWidth,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,

    },
    container: {
        alignItems: 'center'
    },
    profileText: {
        color: 'white',
        fontSize: windowWidth * 0.1,
        marginLeft: windowWidth * -0.7,
        marginBottom: windowHeight * 0.1
    },
    card: {
        display: 'flex',
        width: windowWidth * 0.9,
        height: windowHeight * 0.6,
        backgroundColor: 'white',
        zIndex: 5,
        marginTop: windowHeight * -0.08,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0.5,
        alignItems: 'center'
    },
    profileView: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.18,
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: windowHeight * -0.08,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePhoto: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.18,
        backgroundColor: 'red',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white'
    },
    settingIcon: {
        marginLeft: windowWidth * -0.7,
        marginTop: windowHeight * -0.05
    },
    nameText: {
        fontSize: windowWidth * 0.09,
        color: '#414141',
        marginTop: windowHeight * 0.03,
        marginBottom: windowHeight * 0.03,
    },
    line: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.09,
        borderTopWidth: 0.5,
        borderColor: '#D1D1D1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    settingName: {
        color: 'gray',
        fontSize: windowWidth * 0.05,

    },
    icon: { marginRight: windowWidth * 0.24 },

    nextIcon: { marginLeft: windowWidth * 0.24 },

    down: {
        width: windowWidth * 0.9,
        marginTop: windowHeight * 0.09,
        flexDirection: 'row',
    },

    backArea: {
        width: windowWidth * 0.2,
        height: windowHeight * 0.07,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    saveArea: {
        width: windowWidth * 0.6,
        height: windowHeight * 0.07,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5EFF',
        marginLeft: windowWidth * 0.1,
    },

})



export default Profile;