import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import Logo from "../../../assets/logo.svg"
import IconFB from "../../../assets/fb-icon.svg"
import IconGG from "../../../assets/gg-icon.svg"
import IconApple from "../../../assets/apple-icon.svg"
import { RootScreens } from "..";



export const Onboarding = ({navigation}:any) => {
  // const image = require('../../../assets/logo.svg');
  return (
    <View className="flex-1 bg-[#F3EEEA] items-center">
      <View className="absolute top-0 w-full h-1/2 bg-[#79B4B7] z"></View>
      <View className="mt-20">
        <Logo />
      </View>

      <View className="relative top-11 w-10/12 h-1/2 bg-white rounded-[20px] flex justify-center items-center justify-around py-7">

        <View>
          <Text className="text-xl font-bold" style={styles.text_title}>Welcome to WiseSpend</Text>
          <Text className="text-xs leading-6" style={styles.text_title}>Let’s get your finances in order</Text>
        </View>

        <View style={styles.button_wrapper} className="mt-5">

          <TouchableOpacity style={styles.button_custom} className="h-10"
            onPress={() => navigation.navigate(RootScreens.LOGIN, {isSignup:false})}
          >
            <Text style={styles.text_component} className="font-semibold">Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_custom} className="h-10"
            onPress={() => navigation.navigate(RootScreens.LOGIN, {isSignup:true})}
          >
            <Text style={styles.text_component} className="font-semibold">Sign Up</Text>
          </TouchableOpacity >
        </View>

        <View className="mt-5 flex-row items-center gap-x-3 w-10/12">
          <View className="h-[1] bg-[#455A64] flex-1 box-border"></View>
          <Text className="text-center text-xs" style={styles.text_title}>Or connect using</Text>
          <View className="h-[1] bg-[#455A64] flex-1"></View>
        </View>

        <View className="flex-row items-center gap-x-8">
          <TouchableOpacity>
            <IconFB />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconGG />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconApple />
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text_title: {
    color: "#5E5E5E",
    textAlign: "center",
  },
  button_custom: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#79B4B7",
    borderRadius: 8,
  },
  button_wrapper: {
    width: "83%",
    alignItems: "center",
    justifyContent: "center",	
    rowGap: 12,
  },
  text_component: {
    color: "#79B4B7"
  }
});
