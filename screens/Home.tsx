import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView,StyleSheet,Dimensions } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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

const Home = (props:any) => {

  // console.log(props)


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
              
              props.navigation.openDrawer();
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
              <Image source={require('../assets/examples/pp.jpg')} style={styles.profile} />
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
      <View style={styles.container}>
        {/* konum iconu */}
      <View style={styles.localArea}>
        <MaterialIcons  name="location-on" size={20} color={"white"} />
      </View>
      {/* part 1 */}
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
                        navigation.navigate("Detail")
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
                          navigation.navigate("Detail")
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
                        navigation.navigate("Detail")
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

 const styles = StyleSheet.create({

  body: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  header: {
    borderBottomLeftRadius: 25,
    position: 'absolute',
    top: 0,
    backgroundColor: '#7A78D4',
    width: windowWidth,
    height: windowHeight * 0.25,
    padding: hp('5%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  headerTitleArea: {
    flexDirection: "row",
    marginTop: hp('2%')
  },
  headerTitle: {
    fontFamily:'NotoItalic',
    fontSize: wp('9%'),
    color: 'white',
  },
  headerIcon: {
    marginLeft: wp('16%')
  },
  profileArea: {
    width: wp('12%'),
    height: hp('6%'),
    backgroundColor: 'white',
    borderRadius: 19,
    marginLeft: wp('4%')
  },
  profile: {
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: 19
  },
  searchArea: {
    flexDirection: "row",
    height: hp('7%'),
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginTop: wp('5%'),
    borderRadius: 18
  },
  searchIcon: {
    paddingTop: hp('1.5%'),
    paddingLeft: wp('3%')
  },
  searchText: {
    textAlign: 'left',
    paddingLeft: wp('3%'),
    color: '#fff'
  },
  container: {
    width: windowWidth,
    marginTop: hp('25%'),
    paddingLeft: wp('2%'),

  },
  title: {
    fontSize: wp('7%'),
    color: '#59585F',
    textAlign: 'left',
    marginTop: hp('2%'),
    marginLeft: wp('8%')
  },

  product: { marginLeft: wp('8%')},
  productPhoto: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.2,
    marginTop: hp('3%'),
    borderRadius: 20
  },
  productName: {
    color: '#59585F',
    fontSize: wp('5%'),
    marginTop: hp('2%')
  },
  description: {
    flexDirection: "row",
    marginTop: hp('2.2%'),
    marginBottom: hp('4%'),
  },
  productDescription: {
    color: '#C0C0C2',
    marginTop: hp('1%')
  },
  starText: {
    color: '#59585F',
    marginLeft: wp('1%')
  },
  titleArea: {
    flexDirection: "row"
  },
  more: {
    marginLeft: wp('25%'),
    marginTop: hp('3%'),
    color: '#7A78D4',
    fontFamily: 'sans-serif-medium'
  },
  localArea: {
    height: windowHeight * 0.060,
    width: windowWidth * 0.12,
    backgroundColor: '#7A78D4',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('80%'),
    marginBottom: hp('-70%'),
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 19,
  },
  part2View: {
    zIndex: 0
  }

})


export default Home;