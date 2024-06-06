import { i18n, LocalizationKey } from "@/Localization";
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { HStack, Spinner, Heading } from "native-base";

import IconOnb1 from "../../../assets/materials/onb1.svg"
import IconOnb2 from "../../../assets/materials/onb2.svg"
import IconOnb3 from "../../../assets/materials/onb3.svg"

import Swiper from 'react-native-swiper';
import { RootScreens } from "..";



export const TrueOnboarding = ({ navigation }: any) => {

    const titles = ["Manage your money,\nmanage your life",
        "Stay on track,\nreach your goals",
        "Budget Tight Spend Right WiseSpend's Insight takes Flight"
    ]
    const descriptions = ["The more your money works for you, the less you have to work for money.",
        "Whether it's groceries, dining out, entertainment, allocate your funds wisely and track your progress effortlessly"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    

    return (
        <View className="flex-1 bg-[#F3EEEA] items-center">
            <StatusBar
                backgroundColor={"#79B4B7"}
            />
            {/* <View className="relative bottom-0 w-full h-[45%] bg-white rounded-t-[50px]">

            </View> */}
            <View className="w-full h-[100%] bg-[#79B4B7] items-center" style={{ paddingTop: StatusBar.currentHeight}}>
                <Swiper loop={false} showsPagination={false} >
                    <View className="items-center pt-[50]">
                        <IconOnb1 />
                        <Text style={{ paddingTop: 100, fontWeight: "bold", fontSize: 25, color: "#262626", textAlign:"center" }}>{titles[0]}</Text>
                        <Text style={{color:"#f2f9fc", fontSize:15, marginTop: 20, textAlign:"center", width:"70%"}}>{descriptions[0]}</Text>
                    </View>
                    <View className="items-center pt-[50]">
                        <IconOnb2 />
                        <Text style={{ paddingTop: 90, fontWeight: "bold", fontSize: 25, color: "#262626", textAlign:"center" }}>{titles[1]}</Text>
                        <Text style={{color:"#f2f9fc", fontSize:15, marginTop: 20, textAlign:"center", width:"70%"}}>{descriptions[1]}</Text>
                    </View>
                    <View className="items-center pt-[50]">
                        <IconOnb3 />
                        <Text style={{ paddingTop: 90, fontWeight: "bold", fontSize: 25, color: "#262626", textAlign:"center" }}>{titles[2]}</Text>
                        <TouchableOpacity className="bg-white rounded-3xl px-5 py-4 mt-5"
                            onPress={() => navigation.navigate(RootScreens.ONBOARDING)}
                        >
                            <Text>GET STARTED {">"}</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
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
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        backgroundColor: "rgba(0, 0, 0, 0.92)",
    },
    activeDot: {
        backgroundColor: "#79B4B7",
    },
    inactiveDot: {
        backgroundColor: "rgba(0, 0, 0, 0.92)",
    }
});
