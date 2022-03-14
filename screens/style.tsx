import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#312F53',
    borderTopRightRadius:400,
    borderBottomRightRadius:400,
    justifyContent:'center',
    alignItems:'center'
  },
  homeIcon:{
    width:80,
    height:80,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:'white',
    marginLeft:windowWidth*0.2,
    marginTop:windowHeight*0.02,
    marginBottom:windowHeight*0.02,
  },
  sample1Icon:{
    // position:'absolute',
    width:80,
    height:80,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:'white',
    marginLeft:windowWidth*0.6,
    marginTop:windowHeight*0.02,
    marginBottom:windowHeight*0.02,
  },
  settingsIcon:{
    // position:'absolute',
    width:80,
    height:80,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:'white',
    marginLeft:windowWidth*0.76,
    marginTop:windowHeight*0.02,
    marginBottom:windowHeight*0.02,
  },
  sample2Icon:{
    // position:'absolute',
    width:80,
    height:80,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:'white',
    marginLeft:windowWidth*0.6,
    marginTop:windowHeight*0.02,
    marginBottom:windowHeight*0.02,
  },
  logOutIcon:{
    // position:'absolute',
    width:80,
    height:80,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:'white',
    marginLeft:windowWidth*0.2,
    marginTop:windowHeight*0.02,
    marginBottom:windowHeight*0.02,
  },
  
})