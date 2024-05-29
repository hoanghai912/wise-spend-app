import React, { useState } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native"

import BracketWhite from "../../../assets/materials/bracket_white.svg"

import IconHouse from "../../../assets/icon_component/house.svg";
import IconBill from "../../../assets/icon_component/bill.svg";
import IconTravel from "../../../assets/icon_component/travel.svg";
import IconHealth from "../../../assets/icon_component/health.svg";
import IconShopping from "../../../assets/icon_component/shopping.svg";
import IconFoodDrink from "../../../assets/icon_component/food_drink.svg";
import IconEntertainment from "../../../assets/icon_component/entertainment.svg";
import IconSalary from "../../../assets/icon_component/salary.svg";
import IconOtherIncome from "../../../assets/icon_component/other_income.svg";
import IconExpense from "../../../assets/icon_component/expense.svg";
import IconIncome from "../../../assets/icon_component/income.svg";
import { RootScreens } from "..";



export const ChooseCategory = ({ navigation }: any) => {
    const categories_expense = ["House", "Bill", "Travel", "Health", "Shopping", "Food & Drink",
        "Entertainment"]

    const renderSwitch = (title: any) => {
        switch (title) {
            case "House":
                return <IconHouse />
            case "Bill":
                return <IconBill />
            case "Travel":
                return <IconTravel />
            case "Health":
                return <IconHealth />
            case "Shopping":
                return <IconShopping />
            case "Food & Drink":
                return <IconFoodDrink />
            case "Entertainment":
                return <IconEntertainment />
            case "Salary":
                return <IconSalary />
            case "Other Income":
                return <IconOtherIncome />
            case "Expense":
                return <IconExpense />
            default:
                return <IconIncome />
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
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>Choose Category</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                {categories_expense.map((category, index) => (
                    <View key={index} style={{width:"90%"}}>
                        <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}
                            onPress={() => navigation.navigate(RootScreens.ADDTRANSACTION, {category:category})}
                        >
                            {renderSwitch(category)}
                            <Text style={{fontSize:18, fontWeight:"500", color:"#5E5E5E", paddingLeft:10}}>{category}</Text>
                        </TouchableOpacity>
                        <View style={{ height: 1, backgroundColor: "#5E5E5E", marginVertical:10 }}></View>
                    </View>
                ))}

            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
    bodyContainer: {
        backgroundColor: "#F3EEEA",
        height: "100%",
        paddingTop: 20,
        alignItems:"center",
    },
})
