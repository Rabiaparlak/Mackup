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
  color:'#ECEAEA'
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
container:{
  alignItems:'center',
  paddingTop:windowHeight*0.1,
},
card:{ 
  width: windowWidth * 0.9, 
  height: windowHeight * 0.07, 
  backgroundColor: '#F4F1F1',
  marginBottom:windowHeight*0.02,
  borderRadius:20 ,
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'row',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
},
cardIcon:{ 
  marginLeft: windowWidth * 0.02 
},
cardText:{ 
  fontSize: windowWidth * 0.06, 
  color: '#B2AFAF', 
  marginLeft: windowWidth * 0.25 
},

})