import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

export const TransactionCard = ({title, description, amount}:any) => {
    const type = () => {
        switch (title) {
            case "Salary":
            case "Other Income":
            case "Income":
                return "income"
            default:
                return "expense"
        }
    }
    const renderSwitch = (title:any) => {
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
    }}

    return (
        <View style={styles.container}>
            <View style={{marginLeft: 10}}>
                {renderSwitch(title)}
            </View>
            <View style={styles.text_container}>
                <Text style={styles.text_title}>{title}</Text>
                {description && <Text style={styles.text_description}>{description}</Text>}
            </View>

            <View style={styles.number_container}>
                <Text 
                    style={[{textAlign:"right", fontSize: 18, fontWeight: "600"}, type()==="income"?{color: "#79B4B7"}:{color: "#FD8A8A"}]}
                >
                    {type()==="income"?"+": "-"}
                    {amount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 67,
      backgroundColor: "white",
      borderRadius: 10,
      width: "90%",
      alignItems:"center",
      flexDirection: "row",
    },
    text_container: {
        width: "50%",
        marginLeft: 10,
        // borderWidth:2,
    }, 
    number_container: {
        // borderWidth: 2,
        width: "30%",
        marginRight:10,
    },
    text_title: {
      fontSize: 18,
      fontWeight: "600",
      color: "#5E5E5E",
    },
    text_description: {
      fontSize: 14,
      color: "#9D9D9D",
    },
  
})
  