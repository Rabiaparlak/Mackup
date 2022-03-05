import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "./style";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Introduction = () => {


    const navigation: any = useNavigation();

    return (
        <View style={styles.body}>
            {/* telefonun durum çubuğunu kaldırmak için  */}
            <StatusBar hidden />
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home")
                    }}>
                    <Text style={styles.Skip}>Skip</Text>
                </TouchableOpacity>

                <Image source={require('../assets/examples/1.png')} style={styles.images} />

                <Text style={styles.text}>Beauty is{'\n'}everywhere!</Text>
                <Text style={styles.text2}>Discover beauty professionals{'\n'}and book services near you</Text>
                <View style={styles.slider}>
                    <View style={styles.iconArea}>
                        <AntDesign name="arrowright" size={27} color={"#BBB2EA"} />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Introduction;