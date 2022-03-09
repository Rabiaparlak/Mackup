import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.name}>Daria Eichler</Text>
                <Image source={require('../assets/examples/pp.jpg')} style={styles.profilPhoto}></Image>
                <TouchableOpacity style={{ position: 'absolute' }}
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>
                    <MaterialCommunityIcons name="menu-right-outline" style={styles.backIcon} size={windowWidth * 0.13} color={'#BBBADF'} maxFontSizeMultiplier={60} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>
                    <View style={styles.card}>
                        <Ionicons name="settings" style={styles.cardIcon} size={windowWidth * 0.08} color={'white'} maxFontSizeMultiplier={60} />
                        <Text style={styles.cardText}>Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>
                    <View style={styles.card}>
                        <Ionicons name="settings" style={styles.cardIcon} size={windowWidth * 0.08} color={'white'} maxFontSizeMultiplier={60} />
                        <Text style={styles.cardText}>About me</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>
                    <View style={styles.card}>
                        <Ionicons name="settings" style={styles.cardIcon} size={windowWidth * 0.08} color={'white'} maxFontSizeMultiplier={60} />
                        <Text style={styles.cardText}>Contact</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>
                    <View style={styles.card}>
                        <Ionicons name="settings" style={styles.cardIcon} size={windowWidth * 0.08} color={'white'} maxFontSizeMultiplier={60} />
                        <Text style={styles.cardText}>Attempt</Text>
                    </View>
                </TouchableOpacity>

            </View>


        </View>
    )
}
export default Profile;