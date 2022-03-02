import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text,Image,TextInput  } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Home = () => {


    const navigation: any = useNavigation();

    return (
      
        <View style={styles.body}>
          <StatusBar hidden />
          <View style={styles.header}>
            <View style={styles.headerTitleArea}>
              <Text style={styles.headerTitle}>Hello Daria.</Text>
              <Ionicons style={styles.headerIcon} name="md-menu-outline" size={40} color={"white"} />
              <View style={styles.profileArea}>
              <Image source={require('./img/pp.jpg')} style={styles.profile}/>
              </View>
            </View>
            <View style={styles.searchArea}>
              <Ionicons style={styles.searchIcon} name="search-outline" size={27} color={"white"} />
              <TextInput placeholder="What are you looking for?" style={styles.searchText}>
              </TextInput>
            </View>
          </View>
          
          
        </View>
    )
}
export default Home;