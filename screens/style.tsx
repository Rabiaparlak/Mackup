import {StyleSheet,Dimensions} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    
body:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
header:{borderBottomLeftRadius:25,position:'absolute',top:0,backgroundColor:'#7A78D4',width:windowWidth ,height:windowHeight*0.25 ,padding: hp('5%') },
headerTitleArea:{flexDirection:"row",marginTop:hp('2%')},
headerTitle:{fontSize: wp('9%'),color:'white'},
headerIcon:{marginLeft:wp('16%')},
profileArea:{width:wp('12%'),height:hp('6%'),backgroundColor:'white',borderRadius:19,marginLeft:wp('4%')},
profile:{width:wp('12%'),height:hp('6%'),borderRadius:19},
searchArea:{flexDirection:"row",height:hp('7%'),backgroundColor:'rgba(255, 255, 255, 0.20)',marginTop:wp('5%'),borderRadius:18},
searchIcon:{paddingTop:hp('1.5%'),paddingLeft:wp('3%')},
searchText:{textAlign:'left',paddingLeft:wp('3%')},




})