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
    width: windowWidth,
    height: windowHeight * 1.1,
    backgroundColor: '#9898D9',
    alignItems: 'center',
  },
  shoppingIcon:{
    marginRight:windowWidth*-0.85,
    marginTop:windowHeight*0.05
  },
  kofte: {
    width: windowWidth,
    height: windowHeight * 0.5,
    marginTop: windowHeight * -0.09
  },
  product: {
    width: windowWidth,
    height: windowHeight * 0.5,
    marginTop: windowHeight * 0.05,
  },
  detailViewX: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.4,
    backgroundColor: '#9F9FDC',
    marginTop: windowHeight * 0.13,
    borderRadius: 40,

  },
  detailViewY: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.38,
    backgroundColor: '#B2B2E3',
    marginTop: windowHeight * 0.02,
    borderRadius: 40,
  },
  detailViewZ: {
    position: 'absolute',
    width: windowWidth * 0.9,
    height: windowHeight * 0.36,
    padding: windowWidth * 0.08,
    backgroundColor: '#F3F3FB',
    borderRadius: 40,
    marginTop: windowHeight * 0.02,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 19,
  },
  title: {
    fontSize: windowWidth * 0.05,
    color: '#000000'
  },
  productName: {
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.07,
    color: '#000000',
  },
  productDescription: {
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.045,
    color: '#606060',
  },
  footer: {
    flexDirection: 'row',
    marginTop: windowWidth * 0.13,
  },
  price: {
    fontSize: windowWidth * 0.07,
    color: '#000000',
  },
  addButton: {
    marginLeft: windowWidth * 0.16,
    width: windowWidth * 0.4,
    height: windowHeight * 0.055,
    paddingLeft:windowWidth*0.06,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: "#C0C0C0",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 10.32,
    elevation: 9,
    flexDirection:'row'
  },
  addText:{
    fontSize:windowWidth*0.045,
    // fontFamily:'SFUIDisplay-Semibold'
  },
  addIcon:{
    marginLeft:windowWidth*0.04,
  }
})