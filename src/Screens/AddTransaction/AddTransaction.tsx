import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native"

import BracketWhite from "../../../assets/materials/bracket_white.svg"
import BracketGray from "../../../assets/materials/bracket_gray.svg"
import IconCalendar from "../../../assets/icon_component/calendar.svg"

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

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { CalculatorInput } from 'react-native-calculator'
import { RootScreens } from ".."

import { useSelector, useDispatch } from 'react-redux'
import { add as addTransaction, replaceAllData } from "@/Store/reducers/transaction"


export const AddTransaction = ({ navigation, props }: any) => {
    // const URL_API = "http://192.168.91.203:3000"
    const URL_API = "https://wise-spend-backend-2.vercel.app"
    const dispatch = useDispatch()
    const user_id = useSelector((state: any) => state.user.user_id)

    const [valueAmount, setValueAmount] = useState(0)
    const [note, setNote] = useState('')
    const [category, setCategory] = useState('');
    useEffect(() => {
        if (props) setCategory(props.category)
    }, [props?.category])

    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setDate(date);
        hideDatePicker();
    };

    const renderSwitch = (title: any) => {
        switch (title) {
            case "House":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconHouse />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Bill":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconBill />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Travel":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconTravel />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Health":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconHealth />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Shopping":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconShopping />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Food & Drink":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconFoodDrink />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Entertainment":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconEntertainment />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Salary":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconSalary />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Other Income":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconOtherIncome />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            case "Expense":
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconExpense />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
            default:
                return (
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -12 }}>
                        <IconIncome />
                        <Text style={{ fontSize: 16, color: "#5E5E5E", fontWeight: "500", paddingLeft: 10 }}>{title}</Text>
                    </View>
                )
        }
    }


    const getDate = () => {
        let tempDate = date.toString().split(' ');
        return `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
    };

    const handleSave = (parameters: any) => {
        if (parameters[0].category !== '') {

            // dispatch(addTransaction(parameters));

            fetch(`${URL_API}/transaction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "amount": parameters[0].amount,
                    "date": parameters[0].date,
                    "category": parameters[0].category,
                    "user_id": parameters[0].user_id,
                    "description": parameters[0].description,
                }),
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)
                    if (res.message === "successful") {
                        // dispatch(addTransaction(parameters));
                        fetch(`${URL_API}/transaction/user_id/${user_id}`)
                            .then(res2 => res2.json())
                            .then(res2 => {
                                dispatch(replaceAllData(res2))
                            })
                    }
                })

            navigation.goBack()
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
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>Add Transaction</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "white", borderRadius: 16, paddingHorizontal: 10, paddingVertical: 5 }}
                        onPress={() => handleSave([{

                            category: category
                            , amount: valueAmount
                            , description: note
                            , date: date.toDateString()
                            , user_id: user_id
                        }])}
                    >
                        <Text className="color-white">Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <View style={{ left: "5%" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Category</Text>
                    <TouchableOpacity style={[styles.text_input, styles.chooseCategory, category !== "" ? { backgroundColor: "#F3EEEA" } : {}]}
                        onPress={() => navigation.navigate(RootScreens.CHOOSECATEGORY)}
                    >
                        {category === "" ? <Text style={{ color: "#9D9D9D" }}>Choose Category</Text> : renderSwitch(category)}
                        {category === "" && <BracketGray
                            style={{ paddingRight: 40 }}
                        />}
                    </TouchableOpacity>
                </View>

                <View style={{ left: "5%" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Amount</Text>
                    {/* <TextInput style={styles.text_input}
                        placeholder="0"
                    ></TextInput> */}
                    <View style={styles.text_input}>
                        <View className="h-[4]"></View>
                        <View className="ml-[-10]">
                            <CalculatorInput
                                value={valueAmount}
                                onChange={(value) => setValueAmount(value)}
                                numericButtonBackgroundColor="#F3EEEA"
                                numericButtonColor="#5E5E5E"
                                borderColor="#79B4B7"
                                fontSize={26}
                                actionButtonColor="#79B4B7"
                                displayBackgroundColor="#79B4B7"
                                displayColor="#fff"
                                thousandSeparator=""
                            />
                        </View>

                    </View>
                    <Text style={{ position: "absolute", fontSize: 16, fontWeight: "500", color: "#5E5E5E", top: "50%", right: "14%" }}>VND</Text>
                </View>

                <View style={{ left: "5%" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Note</Text>
                    <TextInput style={styles.text_input}
                        placeholder="Add note"
                        onChange={(text) => setNote(text.nativeEvent.text)}
                    ></TextInput>
                </View>

                <View style={{ left: "5%" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E", paddingBottom: 8 }}>Time</Text>
                    <TextInput style={styles.text_input}
                        numberOfLines={1}
                        editable={false}
                        placeholder="Today"
                        value={getDate()}
                    ></TextInput>
                    <TouchableOpacity style={{ position: "absolute", right: "14%", top: "50%" }}
                        onPress={showDatePicker}
                    >
                        <IconCalendar

                        />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                </View>

            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        // paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
    bodyContainer: {
        backgroundColor: "#F3EEEA",
        height: "100%",
        paddingTop: 20,
    },
    text_input: {
        color: "#000",
        backgroundColor: "#f6f6f6",
        paddingLeft: 15,
        width: "90%",
        borderRadius: 8,
        fontSize: 16,
        height: 50,
        marginBottom: 10,
    },
    chooseCategory: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

})
