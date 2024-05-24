
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Logo from "../../../assets/logo.svg"
import IconEnvelope from "../../../assets/icon_component/envelope.svg"
import IconLock from "../../../assets/icon_component/lock.svg"
import IconUser from "../../../assets/icon_component/user.svg"
import IconFB from "../../../assets/fb-icon.svg"
import IconGG from "../../../assets/gg-icon.svg"
import IconApple from "../../../assets/apple-icon.svg"
import { RootScreens } from "..";


export const Signup = ({ navigation }: any) => {
    // const image = require('../../../assets/logo.svg');
    const [isSignUp, setIsSignUp] = React.useState(false);
    return (
        <View className="flex bg-[#F3EEEA] items-center h-[100%]">
            <View className="absolute top-0 w-full h-[calc(50vh)] bg-[#79B4B7] z"></View>
            <View className="mt-20">
                <Logo />
            </View>

            {/* Input Email and Password */}
            <View className="relative top-11 w-10/12 h-auto bg-white rounded-[20px] flex justify-center items-center justify-around py-7">
                <View className="w-10/12 gap-y-3">
                    <View className="flex-row items-center">
                        <TextInput style={styles.text_input} placeholder="Username"></TextInput>
                        <IconUser
                            width={16}
                            height={16}
                            style={styles.icon}
                            fill={"#BDBDBD"}
                        />
                    </View>

                    <View className="flex-row items-center">
                        <TextInput style={styles.text_input} placeholder="Email"></TextInput>
                        <IconEnvelope
                            width={16}
                            height={16}
                            style={styles.icon}
                            fill={"#BDBDBD"}
                        />
                    </View>

                    <View className="flex-row items-center" >
                        <TextInput style={styles.text_input} placeholder="Password" secureTextEntry={true}></TextInput>
                        <IconLock
                            width={16}
                            height={16}
                            style={styles.icon}
                            fill={"#BDBDBD"}
                        />
                    </View>
                </View>

                {/* Button Login */}
                <TouchableOpacity style={styles.button_custom} className="h-10 w-10/12 mt-5"
                    onPress={() => ""}
                >
                    <Text style={styles.text_component} className="font-semibold">Sign Up</Text>
                </TouchableOpacity>

                {/* Forgot Password */}
                <View className="pt-[13px]">
                    <Text className="text-xs text-center font-light">By signing up, you agree to our
                        <Text style={{ color: "#79B4B7" }}> Term of Service </Text>and
                        <Text style={{ color: "#79B4B7" }}> Privacy Policy </Text>
                    </Text>
                </View>

            </View>


            {/* Or connect using */}
            <View className="mt-10 flex items-center">

                <View className="mt-5 flex-row items-center gap-x-3 w-9/12">
                    <View className="h-[1] bg-[#455A64] flex-1 box-border"></View>
                    <Text className="text-center text-xs" style={{ color: "#5E5E5E", textAlign: "center" }}>Or connect using</Text>
                    <View className="h-[1] bg-[#455A64] flex-1"></View>
                </View>

                <View className="flex-row items-center bg-white box-border mt-4 rounded-[20px]">
                    <TouchableOpacity style={[styles.icon_gap, { paddingLeft: 30 }]}>
                        <IconFB />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon_gap}>
                        <IconGG />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.icon_gap, { paddingRight: 30 }]}>
                        <IconApple />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Button Sign in */}
            <TouchableOpacity className="h-10 mt-2 items-center"
                onPress={() => navigation.navigate(RootScreens.LOGIN, {isSignup:false})}
            >
                <Text style={{ color: "#79B4B7" }} className="">Sign In <Text className="font-semibold text-lg">{">"}</Text> </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        left: 10,
    },
    icon_gap: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 14,
        paddingBottom: 14,
    },
    button_custom: {
        backgroundColor: "#79B4B7",
        borderStyle: "solid",
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#79B4B7",
        borderRadius: 8,
    },
    text_input: {
        color: "#000",
        backgroundColor: "#f6f6f6",
        width: "100%",
        paddingLeft: 40,
        borderRadius: 8,
        fontSize: 16,
        height: 40
    },
    text_component: {
        color: "#fff"
    }
});
