import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text,StyleSheet,Image,TextInput } from "react-native";
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';

const Home = () => {


    const navigation: any = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{borderBottomLeftRadius:25,position:'absolute',top:0,backgroundColor:'#7A78D4',width: wp(100),height: hp(28),padding: hp(5) }}>
            <View style={{flexDirection:"row",marginTop:hp(4)}}>
              <Text style={{fontSize: hp(4.5),color:'white'}}>Hello Daria.</Text>
              <Ionicons style={{color:'white',fontSize:40,marginLeft:wp(19)}} name="md-menu-outline" size={30} color={"black"} />
              <View style={{width:wp(12),height:hp(6),backgroundColor:'white',borderRadius:19,marginLeft:wp(4)}}>
              <Image source={require('./img/pp.jpg')} style={{width:wp(12),height:hp(6),borderRadius:19}}/>
              </View>
            </View>
            <View style={{height:hp(7),backgroundColor:'white',marginTop:wp(5),borderRadius:10}}>
              <TextInput placeholder="What are you looking for?" style={{textAlign:'center'}}>
              </TextInput>
            </View>
          </View>
          <StatusBar hidden />
          
        </View>
    )
}
export default Home;