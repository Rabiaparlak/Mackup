import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { View, TouchableOpacity, Text, Image, TextInput, Alert, StyleSheet, Dimensions, Animated } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { FlatList, ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
    {
        id: 1,
        image: require('../assets/examples/1.png')
    },
    {
        id: 2,
        image: require('../assets/examples/2.png')
    },
    {
        id: 3,
        image: require('../assets/examples/3.png')
    },
    {
        id: 4,
        image: require('../assets/examples/4.png')
    }
]



const Introduction = () => {


    const navigation: any = useNavigation();

    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        ref?.current?.scrollToIndex({
            index,
            animated: true
        })
    }, [index])

    return (
        <View style={styles.body}>
            {/* telefonun durum çubuğunu kaldırmak için  */}
            <StatusBar hidden />
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login")
                    }}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>

                <FlatList
                    ref={ref}
                    contentContainerStyle={{ marginTop: windowHeight * 0.01 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => { // ()=>{}
                        return (
                            <View
                                key={index}

                            >
                                <Image
                                    resizeMode="contain"
                                    source={item.image}
                                    style={styles.images}
                                />
                            </View>
                        )
                    }}
                />
                <Text style={styles.text}>Beauty is{'\n'}everywhere!</Text>
                <Text style={styles.text2}>Discover beauty professionals{'\n'}and book services near you</Text>
                <View
                    style={[
                        styles.slider,
                        {//borderColor:'#BBB2EA',
                            borderTopColor: index == 0 ? 'white' : '#bbb2ea',
                            borderLeftColor: index == 1 ? 'white' : '#bbb2ea',
                            borderBottomColor: index == 2 ? 'white' : '#bbb2ea',
                            borderRightColor: index == 3 ? 'white' : '#bbb2ea'

                        }
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => {
                            if (index == data.length - 1) {
                                navigation.navigate("Login");
                                setIndex(0);
                            }
                            else
                                setIndex(index + 1)
                        }}>
                        <View style={styles.iconArea}>
                            <AntDesign name="arrowright" size={27} color={"#BBB2EA"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

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
    skip: {
        color: 'white',
        marginLeft: windowWidth * 0.80,
        marginTop: windowHeight * 0.1,
    },
    images: {
        width: windowWidth,
        height: windowHeight * 0.4,
        borderRadius: 20,
    },
    text: {
        fontFamily: "SyneMono",
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: windowHeight * 0.03,
    },
    text2: {
        color: '#BBB2EA',
        fontSize: 18,
        textAlign: 'center',
        marginTop: windowHeight * 0.025
    },
    slider: {
        backgroundColor: '#7B6AD4',
        marginTop: windowHeight * 0.05,
        marginBottom: windowHeight * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth * 0.20,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRadius: 30,
    },
    iconArea: {
        width: windowWidth * 0.16,
        height: windowWidth * 0.16,
        backgroundColor: 'white',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        margin: windowWidth * 0.015
    },
})

export default Introduction;

function onRefresh(): void {
    throw new Error("Function not implemented.");
}
