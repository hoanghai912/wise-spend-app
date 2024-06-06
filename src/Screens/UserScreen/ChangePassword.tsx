import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput, Alert } from "react-native"

import { Navbar } from "@/Components"

import BracketWhite from "../../../assets/materials/bracket_white.svg"

import IconAvatarDefault from "../../../assets/materials/avatar_default.svg"
import IconShowPassword from "../../../assets/materials/show_password.svg"
import IconHidePassword from "../../../assets/materials/hide_password.svg"

import { useSelector, useDispatch } from "react-redux"
import { RootScreens } from ".."
// import * as bcrypt from 'bcrypt';


export const ChangePassword = ({ route, navigation }: any) => {
    const props = route.params
    const URL_API = "https://wise-spend-backend-2.vercel.app"
    // const URL_API = "http://192.168.91.203:3000"
    const user_id = useSelector((state: any) => state.user.user_id)
    const dispatch = useDispatch()

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [showPassword, setShowPassword] = useState(false)

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

    const handleSave = async (data:any) => {
        if (data.newPassword === data.newPassword2) {
            fetch(`${URL_API}/checkpass`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": props.user_data.email,
                    "password": data.currentPassword,
                    "newPassword": data.newPassword
                }),
            })
                .then(res => res.json())
                .then(res => {
                    if (res.message === "successful") {
                        
                    }
                })
        }
        
        if (data.newPassword === data.newPassword2) {
            fetch(`${URL_API}/user/${user_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "firstName": props.user_data.firstName,
                    "lastName": props.user_data.lastName,
                    "email": props.user_data.email
                }),
            })
            navigation.goBack()
        }
        else {

            Alert.alert("Error", "Wrong infomation", [
                { text: "OK", onPress: () => ""},
            ])
        }

        
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
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>Change Password</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "white", borderRadius: 16, paddingHorizontal: 10, paddingVertical: 5 }}
                        onPress={() => handleSave({currentPassword: currentPassword,
                            newPassword: newPassword,
                            newPassword2: newPassword2
                        })}
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
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Current Password</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Enter your current password"
                        onChangeText={(e) => setCurrentPassword(e)}
                        secureTextEntry={showPassword}
                    ></TextInput>
                    <TouchableOpacity className="absolute right-0 top-[32] p-4"
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword? <IconShowPassword width={16} height={16}/> : <IconHidePassword width={16} height={16}/>}
                    </TouchableOpacity>
                </View>
                <View className="w-[90%]">
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>New Password</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Enter your new password"
                        onChangeText={(e) => setNewPassword(e)}
                        secureTextEntry={showPassword}
                    ></TextInput>
                    <TouchableOpacity className="absolute right-0 top-[32] p-4"
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword? <IconShowPassword width={16} height={16}/> : <IconHidePassword width={16} height={16}/>}
                    </TouchableOpacity>
                </View>
                <View className="w-[90%]">
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Repeat New Password</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Repeat your new password"
                        onChangeText={(e) => setNewPassword2(e)}
                        secureTextEntry={showPassword}
                    ></TextInput>
                    <TouchableOpacity className="absolute right-0 top-[32] p-4"
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword? <IconShowPassword width={16} height={16}/> : <IconHidePassword width={16} height={16}/>}
                    </TouchableOpacity>
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
