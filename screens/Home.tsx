import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { styles } from "./style";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Home = () => {


  const navigation: any = useNavigation();

  return (

    <View style={styles.body}>
      {/* telefonun durum çubuğunu kaldırmak için  */}
      <StatusBar hidden />
      {/* sayfanın header kısmı  */}
      <View style={styles.header}>
        <View style={styles.headerTitleArea}>
          <Text style={styles.headerTitle}>Hello Daria.</Text>
          <Ionicons style={styles.headerIcon} name="md-menu-outline" size={40} color={"white"} />
          <View style={styles.profileArea}>
            <Image source={require('./img/pp.jpg')} style={styles.profile} />
          </View>
        </View>
        <View style={styles.searchArea}>
          <Ionicons style={styles.searchIcon} name="search-outline" size={27} color={"white"} />
          <TextInput placeholder="What are you looking for?" placeholderTextColor="#D2CDEF" style={styles.searchText}>
          </TextInput>
        </View>
      </View>

      {/* Container kısmı  */}

      <View style={styles.container}>
        <Text style={styles.title}>Popular in Warsaw</Text>
        <View style={styles.products}>
          <View style={styles.product}>
            <Image source={require('./img/pp.jpg')} style={styles.productPhoto} />
            <Text style={styles.productName}>Cute Cut-Hair salon</Text>
            <Text style={styles.productDescription}>1.6 km away</Text>
            <View style={styles.description}>
              <FontAwesome name="star" size={16} color={"#75D1DD"} />
              <Text style={styles.starText}>4.5/5</Text>
            </View>
          </View>

          <View style={styles.product}>
            <Image source={require('./img/pp.jpg')} style={styles.productPhoto} />
            <Text style={styles.productName}>Cute Cut-Hair salon</Text>
            <Text style={styles.productDescription}>1.6 km away</Text>
            <View style={styles.description}>
              <FontAwesome name="star" size={16} color={"#75D1DD"} />
              <Text style={styles.starText}>4.5/5</Text>
            </View>
          </View>

        </View>
      </View>

    </View>

  )
}
export default Home;