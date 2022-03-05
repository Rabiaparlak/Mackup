import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    top: 0,
    backgroundColor: '#7B6AD4',
    width: windowWidth,
    height: windowHeight * 1.06,
    alignItems: 'center',
    justifyContent: 'center',

  },
  Skip: {
    color: 'white',
    marginLeft: windowWidth * 0.80,

  },
  images: {
    marginTop:windowHeight*0.05,
    width:windowWidth*0.8,
    height:windowHeight*0.4,
    borderRadius:20
  },
  text: {

    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginTop: windowHeight * 0.03

  },
  text2: {

    color: '#BBB2EA',
    fontSize: 18,
    textAlign: 'center',
    marginTop: windowHeight * 0.025

  },
  slider: {
    backgroundColor: '#7B6AD4',
    marginTop: windowHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.20,
    borderWidth:1,
    borderBottomWidth:2,
    borderRadius:30,
    borderColor:'#BBB2EA',
    borderBottomColor:'white',
    
    
  },
  iconArea: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.16,
    backgroundColor: 'white',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth*0.015
  },

})