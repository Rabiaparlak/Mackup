import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  header:{
    backgroundColor:'#7A78D4',
    height:windowHeight*0.3,
    width:windowWidth,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column-reverse'
},
name:{
   
   marginTop:windowHeight*0.03,
  fontSize:windowWidth*0.1,
  color:'#C8C7DC'
},
profilPhoto:{
  width:windowWidth*0.26,
  height:windowHeight*0.13,
  borderRadius:100
},
backIcon:{
  marginLeft:windowWidth*0.85,
  marginTop:windowHeight*-0.14,
},

})