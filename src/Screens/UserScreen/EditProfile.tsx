import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native"

import { Navbar } from "@/Components"

import BracketWhite from "../../../assets/materials/bracket_white.svg"

import IconAvatarDefault from "../../../assets/materials/avatar_default.svg"

import { useSelector, useDispatch } from "react-redux"
import { RootScreens } from ".."


export const EditProfile = ({ route, navigation }: any) => {
    const props = route.params
    const URL_API = "https://wise-spend-backend-2.vercel.app"
    const user_id = useSelector((state: any) => state.user.user_id)
    const dispatch = useDispatch()

    const [nameUser, setName] = useState("")
    const [email, setEmail] = useState("")

    const validVariable = (data: any) => {
        if (Object.keys(data).length === 0) return false;
        return true
    }

    const name = (user_data: any) => {
        if (validVariable(user_data)) {
            if (user_data.lastName !== "undefined") {
                return user_data.firstName + ' ' + user_data.lastName
            }
            else if (user_data.firstName !== "undefined") {
                return user_data.firstName
            }
            else return "Name"
        }
    }

    const handleSave = (data:any) => {
        fetch(`${URL_API}/user/${user_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "firstName": data.firstName,
                "lastName": data.lastName,
                "email": data.email === "" ? props.user_data.email:data.email
            }),
        })
        navigation.goBack()
    }

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
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "white", borderRadius: 16, paddingHorizontal: 10, paddingVertical: 5 }}
                        onPress={() => handleSave({firstName:nameUser, email:email, lastName:"undefined"})}
                    >
                        <Text className="color-white">Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View className="bg-[#F3EEEA] h-[100%] items-center">
                <View style={{marginTop:30}}>

                    <IconAvatarDefault 
                        width={150}
                        height={150}
                    />
                </View>
                <View className="w-[90%] mt-[30]">
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Name</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Enter your name"
                        defaultValue={name(props.user_data)}
                        onChange={(e) => setName(e.nativeEvent.text)}
                    ></TextInput>
                </View>
                <View className="w-[90%]">
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Email</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Enter your email"
                        defaultValue={props.user_data.email}
                        onChange={(e) => setEmail(e.nativeEvent.text)}
                    ></TextInput>
                </View>
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
