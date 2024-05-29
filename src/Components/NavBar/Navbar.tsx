import { styled } from "nativewind";
import React from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity  } from "react-native";
import Whitebase from '../../../assets/materials/whitebase_component.svg'
import AddButton from '../../../assets/materials/add_button.svg'
import IconHome from "../../../assets/icon_component/home.svg"
import IconStatistic from "../../../assets/icon_component/statistic.svg"
import IconPlan from "../../../assets/icon_component/plan.svg"
import IconUser from "../../../assets/icon_component/user_profile.svg"

import IconHomeActive from "../../../assets/icon_component/home-active.svg"
import IconStatisticActive from "../../../assets/icon_component/statistic-active.svg"
import IconPlanActive from "../../../assets/icon_component/plan-active.svg"
import IconUserActive from "../../../assets/icon_component/user_profile-active.svg"
import { RootScreens } from "@/Screens";

export const Navbar = ({navigation, screen}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.base}>
                {/* Base */}
                <Whitebase
                    width={'100%'}
                />
                {/* Add button in center*/}
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate(RootScreens.ADDTRANSACTION)}>
                    <AddButton />
                </TouchableOpacity>

                {/* List of functional */}
                <View style={styles.functionContainer}>
                    
                    <TouchableOpacity style={{alignItems:"center"}}
                        onPress={() => navigation.navigate(RootScreens.HOMESCREEN)}
                        activeOpacity={1}
                    >
                        {screen === "HomeScreen" ? <IconHomeActive /> : <IconHome />}
                        <Text style={[styles.mini_description, {...screen === "HomeScreen" ? {color: "#79B4B7"} : {}}]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                        onPress={() => navigation.navigate(RootScreens.STATISTICS)}
                        activeOpacity={1}
                    >
                        {screen === "StatisticScreen" ? <IconStatisticActive /> : <IconStatistic />}
                        <Text style={[styles.mini_description, {...screen === "StatisticScreen" ? {color: "#79B4B7"} : {}}]}>Statistic</Text>
                    </TouchableOpacity>
                    
                    {/* Dummy component */} 
                    <View></View>

                    <TouchableOpacity style={{alignItems:"center"}}
                        onPress={() => navigation.navigate(RootScreens.PLAN)}
                        activeOpacity={1}    
                    >
                        {screen === "PlanScreen" ? <IconPlanActive /> : <IconPlan />}
                        <Text style={[styles.mini_description, {...screen === "PlanScreen" ? {color: "#79B4B7"} : {}}]}>Share</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                        onPress={() => navigation.navigate(RootScreens.USER)}
                        activeOpacity={1}
                    >
                        {screen === "UserScreen" ? <IconUserActive /> : <IconUser />}
                        <Text style={[styles.mini_description, {...screen === "UserScreen" ? {color: "#79B4B7"} : {}}]}>User</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    base:{
        width:Dimensions.get('window').width,
        alignItems: "center",
        justifyContent:"center",
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
    },
    functionContainer: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-around",
        width: "100%",
    },
    mini_description: {
        fontSize: 10,
        color: "#9D9D9D",
        textAlign:"center",
    },
});
