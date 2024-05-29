import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native"

import { Navbar } from "@/Components"
import { TransactionCard } from "@/Components";
import { HomeTab } from "@/Components/HomeTab";

import MainCard from "../../../assets/materials/main_card.svg"
import IncomIconCard from "../../../assets/materials/income_card.svg"
import ExpenseIconCard from "../../../assets/materials/expense_card.svg"

import { useSelector, useDispatch } from 'react-redux'

const c_data_sample = [
  {
    title: "Bill",
    description: "Snacks",
    amount: "5,500,000",
  },
  {
    title: "Other Income",
    description: "Snacks",
    amount: "50,000",
  },
  {
    title: "Shopping",
    description: "Snacks",
    amount: "50,000",
  },
  {
    title: "Bill",
    description: "Snacks",
    amount: "50,000",
  },
  {
    title: "Salary",
    description: "Snacks",
    amount: "500,000",
  },
  {
    title: "Food & Drink",
    description: "Snacks",
    amount: "500,000",
  },
]
export const HomeScreen = ({ navigation }: any) => {
  const [dataSample, setDataSample] = useState([])
  const selector = useSelector((state: any) => state.transaction.data)

  useEffect(() => {
    setDataSample(selector)
  }, [selector])

  const data_sample = dataSample
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"#79B4B7"}

      />
      <View >
        <View style={{ backgroundColor: "#79B4B7" }} className="h-60">
          <Text style={{ fontSize: 25 }} className="color-white font-medium pt-[20] pl-[27]">WiseSpend</Text>

          <View style={styles.mainCard}>

            <MainCard
              width={"100%"}

            />
            <View className="absolute mt-[20] w-[88%] pl-[25]">
              <Text style={{ fontSize: 18, fontWeight: "500", color: "#5E5E5E" }}>Total Balance</Text>
              <Text style={{ fontSize: 25, fontWeight: "700", color: "#5E5E5E" }}>300,000 VND</Text>
            </View>

            <View className="absolute bottom-0 flex-row w-[88%] mb-[40]" style={{ justifyContent: "space-around" }}>
              <View className="pr-[20]">
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                  <Text style={{ fontSize: 15, fontWeight: "500", color: "#5E5E5E", marginRight: 5 }}>Income</Text>
                  <IncomIconCard />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#5E5E5E" }}>500,000 VND</Text>
              </View>

              <View className="pl-[20]">
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                  <Text style={{ fontSize: 15, fontWeight: "500", color: "#5E5E5E", marginRight: 5 }}>Expense</Text>
                  <ExpenseIconCard />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#5E5E5E" }}>300,000 VND</Text>
              </View>
            </View>


          </View>
        </View>

        <View className="bg-white h-28 relative z-[-1]">
        </View>


        <View style={styles.homeTab}>
          <HomeTab />
        </View>
      </View>



      {/* Transaction Card */}
      <ScrollView contentContainerStyle={styles.transactionCardContainer}>

        {data_sample.map((item:any, index:any) => (
          <View style={styles.transactionCard} key={index} >
            <TransactionCard {...item} />
          </View>
        ))}

        <View style={{height:70}} key={"Dummy"}></View>

      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <Navbar navigation={navigation} screen="HomeScreen" />
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
  mainCard: {
    // borderWidth:2,
    alignItems: "center",
    marginTop: 50,
  },
  homeTab: {
    position: "absolute",
    bottom: 10,
    // borderWidth:2,
    width: "90%",
    left:"5%"
  },
  transactionCardContainer: {
    alignItems: "center",
  },
  transactionCard: {
    marginTop: 10,
    // borderWidth:2 
  },

})
