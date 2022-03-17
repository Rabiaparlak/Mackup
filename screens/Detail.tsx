import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Entypo, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
  {
    id: 1,
    image: require('../assets/examples/urun1.png')
  },
  {
    id: 2,
    image: require('../assets/examples/urun2.png')
  },
]

const Detail = () => {

  const navigation: any = useNavigation();
  const [like, setLike] = React.useState(false);


  return (
    <View style={styles.body}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home")
        }}
        style={{ zIndex: 2, position: 'absolute', left: windowWidth * 0.05, top: 30 }}>
        <Entypo name="align-left" size={30} color={'#4C4C6D'} />
      </TouchableOpacity>
      <TouchableOpacity style={{ zIndex: 2, position: 'absolute', right: windowWidth * 0.05, top: 30 }}>
        <AntDesign name="shoppingcart" color={'#4C4C6D'} size={20} />
      </TouchableOpacity>
      {/* resizeMode fotoğrafın boyutunun oranını korumasını sağlar */}
      <ImageBackground source={require('../assets/examples/kofte.png')} resizeMode="contain" style={styles.kofte}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            data.map((item, index) => {
              return (
                <View
                  key={index}
                >
                  {/* ImageBackground içine yazıldı çünkü arka planına görsel getirmek istedim */}
                  <Image source={item.image} resizeMode="contain" style={styles.product} />
                </View>
              )
            })
          }
        </ScrollView>
      </ImageBackground>

        {/* Detayların yazıldığı div */}
        <View style={styles.detailViewX}>
          <View style={styles.detailViewY}>
            {/* akışlı görüntü sağlamak için kullanıldı */}
            <View style={styles.detailViewZ}>
              {/* like için buton */}
              
              <TouchableOpacity
                onPress={() => {
                  setLike(!like)
                }}
                style={styles.likeButton}
              >

                <MaterialCommunityIcons name={like ? "heart-multiple" : "heart-multiple-outline"} size={25} color={'white'} />

              </TouchableOpacity>
              {/* div içideki başlık , detay fiyat ekle butonu olan kısımlar */}
              <Text style={styles.title}>Product Detail</Text>
              <Text style={styles.productName}>Classic Style Necklace</Text>
              <Text style={styles.productDescription}>Introducing you with the most luxury and comfortable sofa</Text>
              <View style={styles.footer}>
                <Text style={styles.price}>$2500</Text>
                <TouchableOpacity
                  onPress={() => { }}
                >
                  <View style={styles.addButton}>
                    <Text style={styles.addText}>Add to Card</Text>
                    <MaterialIcons name="add-shopping-cart" size={20} style={styles.addIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </View >



  )

}


const styles = StyleSheet.create({
  body: {
    width: windowWidth,
    height: windowHeight * 1.1,
    backgroundColor: '#9898D9',
    alignItems: 'center',
  },
  left: {
    marginLeft: windowWidth * -0.85,
    marginTop: windowHeight * 0.05
  },
  shoppingIcon: {
    marginRight: windowWidth * -0.85,
    marginTop: windowHeight * -0.04,
  },
  kofte: {
    width: windowWidth,
    height: windowHeight * 0.5,
    marginTop: windowHeight * -0.01
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
    marginTop: windowHeight * 0.1,
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
  likeButton: {
    width: windowWidth * 0.14,
    height: windowHeight * 0.07,
    backgroundColor: '#9898D9',
    borderRadius: 50,
    marginTop: windowHeight * -0.07,
    marginLeft: windowWidth * 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: windowWidth * 0.05,
    color: '#454545'
  },
  productName: {
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.07,
    fontFamily: 'NotoItalic',
    color: '#000000',
  },
  productDescription: {
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.045,
    color: '#606060',
  },
  footer: {
    position:'absolute',
    flexDirection: 'row',
    left:windowWidth*0.08,
    bottom:windowHeight*0.03,
  },
  price: {
    fontSize: windowWidth * 0.065,
    fontFamily: 'NotoItalic',
    color: '#000000',
  },
  addButton: {
    marginLeft: windowWidth * 0.16,
    width: windowWidth * 0.4,
    height: windowHeight * 0.055,
    paddingLeft: windowWidth * 0.06,
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
    flexDirection: 'row'
  },
  addText: {
    fontSize: windowWidth * 0.045,
  },
  addIcon: {
    marginLeft: windowWidth * 0.04,
  }
})

export default Detail;