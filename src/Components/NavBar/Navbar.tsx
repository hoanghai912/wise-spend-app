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

export const Navbar = ({navigation, screen}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.base}>
                {/* Base */}
                <Whitebase
                    width={'100%'}
                />
                {/* Add button in center*/}
                <TouchableOpacity style={styles.addButton}>
                    <AddButton />
                </TouchableOpacity>

                {/* List of functional */}
                <View style={styles.functionContainer}>
                    
                    <View style={{alignItems:"center"}}>
                        {screen === "HomeScreen" ? <IconHomeActive /> : <IconHome />}
                        <Text style={[styles.mini_description, {...screen === "HomeScreen" ? {color: "#79B4B7"} : {}}]}>Home</Text>
                    </View>

                    <View style={{alignItems:"center"}}>
                        {screen === "StatisticScreen" ? <IconStatisticActive /> : <IconStatistic />}
                        <Text style={[styles.mini_description, {...screen === "StatisticScreen" ? {color: "#79B4B7"} : {}}]}>Statistic</Text>
                    </View>
                    
                    {/* Dummy component */} 
                    <View></View>

                    <View style={{alignItems:"center"}}>
                        {screen === "PlanScreen" ? <IconPlanActive /> : <IconPlan />}
                        <Text style={[styles.mini_description, {...screen === "PlanScreen" ? {color: "#79B4B7"} : {}}]}>Share</Text>
                    </View>

                    <View style={{alignItems:"center"}}>
                        {screen === "ProfileScreen" ? <IconUserActive /> : <IconUser />}
                        <Text style={[styles.mini_description, {...screen === "ProfileScreen" ? {color: "#79B4B7"} : {}}]}>User</Text>
                    </View>

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
  