import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';

const Home = () => {


    const navigation: any = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{borderBottomLeftRadius:25,position:'absolute',top:0,backgroundColor:'#7A78D4',width: widthPercentageToDP(100),height: heightPercentageToDP(28) }}>
              
          </View>
          <StatusBar hidden />
          
        </View>
    )
}
export default Home;