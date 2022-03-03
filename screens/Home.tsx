import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView } from "react-native";
import { styles } from "./style";
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
/* product name, product description, star, image */
/*
Burada data adında bir adet dizi oluşturdum. map, filter, find vs. metodlar arraylar için oluşturulmuştur.
Burada görmüş olduğun data verisi içinde objeler döndürüyor. Her bir objeyi tek tek ekrana basıyoruz alt tarafta.
*/
const data = [
  {
    id: 1,
    product_name: "Kolye",
    desc: "Çok güzel bir kolye, keşke benim olsa.",
    star: 4.5,
    image: require('../assets/examples/kolye.jpg')
  },
  {
    id: 2,
    product_name: "Kolye1",
    desc: "Çok güzel bir kolye, keşke benim olsa.",
    star: 4.5,
    image: require('../assets/examples/kolye.jpg')
  },
  {
    id: 3,
    product_name: "Kolye2",
    desc: "Çok güzel bir kolye, keşke benim olsa.",
    star: 4.5,
    image: require('../assets/examples/kolye.jpg')
  }
]

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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile")
            }}
          >
            <Ionicons style={styles.headerIcon} name="md-menu-outline" size={40} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile")
            }}
          >
            <View style={styles.profileArea}>
              <Image source={require('./img/pp.jpg')} style={styles.profile} />
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.searchArea}>
          <Ionicons style={styles.searchIcon} name="search-outline" size={27} color={"white"} />
          <TextInput placeholder="What are you looking for?" placeholderTextColor="#D2CDEF" style={styles.searchText}>
          </TextInput>
        </View>
      </View>

      {/* Container kısmı  */}
      {/* part 1 */}
      <View style={styles.container}>
      <View style={styles.localArea}>
        <MaterialIcons name="location-on" size={20} color={"white"} />
      </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleArea}>
            <Text style={styles.title}>Popular in Warsaw</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile")
              }}
            >
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            // Bunu göstermiyoruz ekranda.
            showsHorizontalScrollIndicator={false} // bu indikatör şey yani yan tarafta aşağı mı indin yukarı mı çıktın gösteren şey var ya. O işte.
          >
            {
              data.map((item, index) => {
                /*
                Bu şekilde öğrendiklerini de not alarak şey yaparasan daha akılda kalıcı olabilir bebeğim.
                  FILTER -> Dizinin içerisinden obje içerisindeki bir değişkene bağlı filtreleme işlemleri için kullanılır.
                  MAP -> Diziyi foreach alt yapısı kullanarak tasarıma return ettirmeyi sağlar.
                  FIND -> Dizi içerisinde bir objeye bağlı veriyi çekmek için kullanılır. (Filterelemeye benzer.)
                */
                return (
                  <View
                    key={index}
                    style={styles.product}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Profile")
                      }}
                    >
                      <Image source={item.image} style={styles.productPhoto} />
                    </TouchableOpacity>

                    <Text style={styles.productName}>{item.product_name}</Text>
                    <Text style={styles.productDescription}>{item.desc}</Text>
                    <View style={styles.description}>
                      <FontAwesome name="star" size={16} color={"#75D1DD"} />
                      <Text style={styles.starText}>{item.star}/5</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
          {/* part2 */}
          <View>
            <Text style={styles.title}>Popular in Warsaw</Text>
            <ScrollView
              horizontal
              // Bunu göstermiyoruz ekranda.
              showsHorizontalScrollIndicator={false} // bu indikatör şey yani yan tarafta aşağı mı indin yukarı mı çıktın gösteren şey var ya. O işte.
            >
              {
                data.map((item, index) => {
                  /*
                  Bu şekilde öğrendiklerini de not alarak şey yaparasan daha akılda kalıcı olabilir bebeğim.
                    FILTER -> Dizinin içerisinden obje içerisindeki bir değişkene bağlı filtreleme işlemleri için kullanılır.
                    MAP -> Diziyi foreach alt yapısı kullanarak tasarıma return ettirmeyi sağlar.
                    FIND -> Dizi içerisinde bir objeye bağlı veriyi çekmek için kullanılır. (Filterelemeye benzer.)
                  */
                  return (
                    <View
                      key={index}
                      style={styles.product}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Profile")
                        }}
                      >
                        <Image source={item.image} style={styles.productPhoto} />
                      </TouchableOpacity>
                      <Text style={styles.productName}>{item.product_name}</Text>
                      <Text style={styles.productDescription}>{item.desc}</Text>
                      <View style={styles.description}>
                        <FontAwesome name="star" size={16} color={"#75D1DD"} />
                        <Text style={styles.starText}>{item.star}/5</Text>
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
          {/* part3 */}
          <Text style={styles.title}>Popular in Warsaw</Text>
          <ScrollView
            horizontal
            // Bunu göstermiyoruz ekranda.
            showsHorizontalScrollIndicator={false} // bu indikatör şey yani yan tarafta aşağı mı indin yukarı mı çıktın gösteren şey var ya. O işte.
          >
            {
              data.map((item, index) => {
                /*
                Bu şekilde öğrendiklerini de not alarak şey yaparasan daha akılda kalıcı olabilir bebeğim.
                  FILTER -> Dizinin içerisinden obje içerisindeki bir değişkene bağlı filtreleme işlemleri için kullanılır.
                  MAP -> Diziyi foreach alt yapısı kullanarak tasarıma return ettirmeyi sağlar.
                  FIND -> Dizi içerisinde bir objeye bağlı veriyi çekmek için kullanılır. (Filterelemeye benzer.)
                */
                return (
                  <View
                    key={index}
                    style={styles.product}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Profile")
                      }}
                    >
                      <Image source={item.image} style={styles.productPhoto} />
                    </TouchableOpacity>
                    <Text style={styles.productName}>{item.product_name}</Text>
                    <Text style={styles.productDescription}>{item.desc}</Text>
                    <View style={styles.description}>
                      <FontAwesome name="star" size={16} color={"#75D1DD"} />
                      <Text style={styles.starText}>{item.star}/5</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  )
}
export default Home;