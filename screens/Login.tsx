import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
    const navigation: any = useNavigation();
    const [index, setIndex] = React.useState(1);
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordAgain, setPasswordAgain] = React.useState("");

    const emptyValues = () => {
        setEmail("");
        setUserName("");
        setPassword("");
        setPasswordAgain("");
    }

    return (
        <View>
            <StatusBar hidden />
            {/* top left circle */}
            <View style={styles.roundOne}></View>
            {/* top right circle */}
            <View style={styles.roundTwo}></View>

            {/* login and registration part */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    setIndex(1);
                    emptyValues();
                }}>
                    <Text style={[styles.loginText, { color: index == 1 ? 'black' : 'gray' }]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setIndex(2);
                    emptyValues();
                }}>
                    <Text style={[styles.registerText, { color: index == 2 ? 'black' : 'gray' }]}>Register</Text>
                </TouchableOpacity>
            </View>
            {/* the part where the inputs are taken */}
            <View style={styles.container}>
                {/* UserName */}

                {
                    index == 1 ?
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.userNameView}>
                                    <AntDesign name="user" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>User Name</Text>
                                    <TextInput
                                        value={userName}
                                        placeholder="your user name"
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setUserName(text)
                                        }}
                                    />
                                </View>
                                {/* Password */}
                                <View style={styles.userNameView}>
                                    <SimpleLineIcons name="lock" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>Password</Text>
                                    <TextInput
                                        value={password}
                                        secureTextEntry
                                        placeholder="**********"
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setPassword(text)
                                        }}
                                    />
                                </View>
                            </ScrollView>
                            {/* Redirect to home page with login button */}
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("MyDrawer")
                                    emptyValues();
                                }}
                            >
                                <View style={styles.loginButton}>
                                    <Text style={styles.login}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.userNameView}>
                                    <AntDesign name="user" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>User Name</Text>
                                    <TextInput
                                        value={userName}
                                        placeholder="your user name"
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setUserName(text)
                                        }}
                                    />
                                </View>
                                <View style={styles.userNameView}>
                                    <AntDesign name="user" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>E-mail</Text>
                                    <TextInput
                                        value={email}
                                        placeholder="@..."
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setEmail(text)
                                        }}
                                    />
                                </View>
                                <View style={styles.userNameView}>
                                    <AntDesign name="user" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>Password</Text>
                                    <TextInput
                                        value={password}
                                        placeholder="**********"
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setPassword(text)
                                        }}
                                    />
                                </View>
                                {/* Password */}
                                <View style={styles.userNameView}>
                                    <SimpleLineIcons name="lock" size={15} color='gray' />
                                    <Text style={{ marginLeft: 12 }}>Password Again</Text>
                                    <TextInput
                                        secureTextEntry
                                        value={passwordAgain}
                                        placeholder="**********"
                                        placeholderTextColor="#D2CDEF"
                                        style={styles.input}
                                        onChangeText={(text) => {
                                            setPasswordAgain(text)
                                        }}
                                    />
                                </View>
                            </ScrollView>
                            {/* Redirect to home page with login button */}
                            <TouchableOpacity
                                onPress={() => {
                                    setIndex(1)
                                    emptyValues();
                                }}
                            >
                                <View style={styles.loginButton}>
                                    <Text style={styles.login}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                }
            </View>
            {/* round bottom left */}
            <View style={styles.roundThree}></View>
            {/* the small one on the left */}
            <View style={styles.roundFour}></View>

        </View>
    )
}
const styles = StyleSheet.create({
    roundOne: {
        backgroundColor: '#7A78D4',
        width: windowWidth * 0.5,
        height: windowHeight * 0.25,
        borderRadius: 100,
        marginTop: windowHeight * -0.1,
        marginLeft: windowWidth * -0.05,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 18
    },
    roundTwo: {
        backgroundColor: '#7A78D4',
        width: windowWidth,
        height: windowHeight * 0.5,
        borderRadius: 500,
        marginTop: windowHeight * -0.3,
        marginLeft: windowWidth * 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    container: {
        width: windowWidth,
        height: windowHeight * 0.45,
        paddingTop: windowWidth * 0.08,
        alignItems: 'center',
        // justifyContent:'center',
    },
    loginText: {
        marginLeft: windowWidth * 0.1,
        fontSize: windowWidth * 0.045
    },
    registerText: {
        marginLeft: windowWidth * 0.05,
        fontSize: windowWidth * 0.045
    },
    userNameView: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.09,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        marginBottom: windowHeight * 0.03,
        flexDirection: 'row',
        padding: 12,
        shadowColor: "#D2CDEF",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    input: {
        marginLeft: -20,
        marginTop: 10
    },
    loginButton: {
        backgroundColor: '#7A78D4',
        width: windowWidth * 0.6,
        height: windowHeight * 0.07,
        borderRadius: 30,
        marginTop: windowWidth * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    login: {
        color: 'white',
        fontSize: windowWidth * 0.04,
    },
    roundThree: {
        backgroundColor: '#7A78D4',
        width: windowWidth * 0.18,
        height: windowHeight * 0.09,
        borderRadius: 50,
        marginTop: windowHeight * 0.12,
        marginLeft: windowWidth * 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        zIndex: 5,
    },
    roundFour: {
        backgroundColor: '#7A78D4',
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        borderRadius: 100,
        marginTop: windowHeight * -0.06,
        marginLeft: windowWidth * -0.09,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        zIndex: 1,
    },
})

export default Login;