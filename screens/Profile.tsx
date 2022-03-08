import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { View, Text, Dimensions,Image,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.name}>Daria Eichler</Text>
                <Image source={require('../assets/examples/pp.jpg')}style={styles.profilPhoto}></Image>
                <TouchableOpacity style={{position:'absolute'}}
                        onPress={() => {
                                navigation.navigate("Home");
                        }}>
                        <MaterialCommunityIcons name="menu-right-outline" style={styles.backIcon} size={windowWidth*0.13} color={'#BBBADF'} maxFontSizeMultiplier={60} />
                    </TouchableOpacity>
                
            </View>
            
        </View>
    )
}
export default Profile;