import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native"

import { Navbar } from "@/Components"

import BracketWhite from "../../../assets/materials/bracket_white.svg"
import Logo from "../../../assets/logo.svg"


export const AboutUs = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"#79B4B7"}
            />

            <View style={{ height: 80, backgroundColor: "#79B4B7" }}>
                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", paddingHorizontal: 15, position: "relative", bottom: 5, height: "100%" }}>
                    <View className="flex-row gap-x-2 items-center">
                        <TouchableOpacity className="p-[5]"
                            onPress={() => navigation.goBack()}
                        >

                            <BracketWhite />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>About us</Text>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View className="w-[100%] items-center mt-[20]">

                <View className="bg-white w-[90%] h-[70%] rounded-[10px] items-center justify-between">
                    <Text style={{fontSize:18, fontWeight:"500", color:"#5E5E5E", padding:15}}>This app is created by Multiverse Team with only 3 members!</Text>
                    <View>
                        <Logo />
                    </View>
                    <Text style={{fontSize:18, fontWeight:"500", color:"#5E5E5E", padding:15}}>The End</Text>
                </View>
            </View>

            <View style={styles.navbar}>

                <Navbar navigation={navigation} screen="UserScreen" />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
    navbar: {
        position: "absolute",
        bottom: -2,
    },
    text_input: {
        color: "#000",
        backgroundColor: "#f6f6f6",
        paddingLeft: 15,
        width: "100%",
        borderRadius: 8,
        fontSize: 16,
        height: 50,
        marginBottom: 10,
    },

})
