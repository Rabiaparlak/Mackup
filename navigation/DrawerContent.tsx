import React from "react";
import { View, Dimensions, Image,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather, FontAwesome, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawerContent = (props: any) => {
    const [openClose, setOpenClose] = React.useState(false);
    const navigation: any = useNavigation();
    return (
        <View style={styles.body}>
            <Image source={require('../assets/examples/makeup.png')} resizeMode="contain" style={styles.menuImage} />

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Home")
                }}
                style={styles.sample1}
            >
                <FontAwesome name="home" size={30} color={'white'}></FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.sample2}
            >
                <AntDesign name="sharealt" size={30} color={'white'}></AntDesign>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setOpenClose(!openClose);
                    // props.navigation.openDrawer();
                }}
                style={styles.sample3}
            >
                <Fontisto name={openClose ? "angle-right" : "angle-left"} size={30} color={'white'}></Fontisto>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Profile")
                }}
                style={styles.sample4}
            >
                <Feather name="settings" size={30} color={'white'}></Feather>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login")
                }}
                style={styles.sample5}
            >
                <MaterialIcons name="logout" size={30} color={'white'}></MaterialIcons>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#312F53',
      borderTopRightRadius: 400,
      borderBottomRightRadius: 400,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRightColor: 'white',
      borderTopColor: '#312F53',
      borderBottomColor: '#312F53',
    },
    text:{
      position:'absolute',
      color:'white',
      fontFamily:'SansitaSwashed',
      fontSize:windowWidth*0.18,
      left:10,
    },
    menuImage:{
      position:'absolute',
      width:windowWidth*0.55,
      left:2
    },
    sample1: {
      width: 65,
      height: 65,
      backgroundColor: '#2A2847',
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      marginLeft: windowWidth * 0.32,
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.01,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    sample2: {
      // position:'absolute',
      width: 65,
      height: 65,
      backgroundColor: '#2A2847',
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      alignItems:'center',
      justifyContent:'center',
      marginLeft: windowWidth * 0.6,
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.02,
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    sample3: {
      // position:'absolute',
      width: 65,
      height: 65,
      backgroundColor: '#2A2847',
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      marginLeft: windowWidth * 0.76,
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.02,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    sample4: {
      // position:'absolute',
      width: 65,
      height: 65,
      backgroundColor: '#2A2847',
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      alignItems:'center',
      justifyContent:'center',
      marginLeft: windowWidth * 0.6,
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.02,
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    sample5: {
      // position:'absolute',
      width: 65,
      height: 65,
      backgroundColor: '#2A2847',
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      alignItems:'center',
      justifyContent:'center',
      marginLeft: windowWidth * 0.32,
      marginTop: windowHeight * 0.01,
      marginBottom: windowHeight * 0.02,
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
})
export default DrawerContent;