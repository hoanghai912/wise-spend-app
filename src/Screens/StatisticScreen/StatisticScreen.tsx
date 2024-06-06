import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native"

import { Navbar } from "@/Components"
import { TransactionCard } from "@/Components";
import { RootScreens } from "..";

import { useSelector } from "react-redux";
import PieChart from "react-native-pie-chart";

export const StatisticScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState("Expense")
  const [categories_amount, setCategoriesAmount] = useState({
    House: 0,
    Bill: 0,
    Travel: 0,
    Health: 0,
    Shopping: 0,
    "Food & Drink": 0,
    Entertainment: 0,
    Salary: 0,
    "Other Income": 0,
  });

  const category_color = {
    House: "#fd8a8a",
    Bill: "#7bd3ea",
    Travel: "#9ea1d4",
    Health: "#f1b1eb",
    Shopping: "#faab78",
    "Food & Drink": "#f1e98c",
    Entertainment: "#8ce993",
    Salary: "#e1cb8b",
    "Other Income": "#f8f0df",
    Expense: "#fd8a8a",
    Income: "#8ce993",
  }
  
  const [dataSample, setDataSample] = useState([])
  const transaction_data = useSelector((state: any) => state.transaction.data)
  // const user_id = useSelector((state: any) => state.user.user_id)
  // console.log(transaction_data)

  const [data_chart, setDataChart] = useState<number[]>([])
  const [color_chart, setColorChart] = useState<string[]>([])

  useEffect(() => {
    setDataSample(transaction_data)
    const categories_amount_copy = categories_amount
    // transaction_data.map((item:any) => {
    //   if (item.category in categories_amount) {
    //     categories_amount_copy[item.category as keyof typeof categories_amount_copy] += item.amount
    //   }
    // })
    Object.keys(categories_amount_copy).map(key => {
      categories_amount_copy[key as keyof typeof categories_amount_copy] = calculate_category(transaction_data, key)
    })

    setCategoriesAmount(prev => categories_amount_copy)
    // console.log(categories_expense_amount)
    const [data, color] = chart_data(categories_amount_copy, selectedTab)
    setDataChart(data)
    setColorChart(color)
  }, [transaction_data])

  const handleChangeCategoryType = (type: any) => {
    if (type === "Expense") {
      setSelectedTab("Expense")
      const [data, color] = chart_data(categories_amount, "Expense")
      setDataChart(data)
      setColorChart(color)
    } else if (type === "Income") {
      setSelectedTab("Income")
      const [data, color] = chart_data(categories_amount, "Income")
      setDataChart(data)
      setColorChart(color)
    }
    else {
      setSelectedTab("Total")
      setDataChart([calculate_transaction(data_sample, "Expense"), calculate_transaction(data_sample, "Income")])
      setColorChart(["#fd8a8a", "#8ce993"])
    }
  }
  const tabBar = () => {
    return (
      <View className="bg-white h-[46] w-[100%] items-center justify-center">
        <View className="h-[34] border-[#79B4B7] flex-row w-[90%] border-[1px] items-center justify-around rounded-[20px]">
          <TouchableOpacity className="w-[33%] py-[5]"
            style={selectedTab === "Expense" ? styles.selectedTab : {}}
            onPress={() => handleChangeCategoryType("Expense")}
          >
            <Text className="text-center" style={[styles.tabText, selectedTab === "Expense" ? styles.selectedTabText : {}]}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[33%] py-[5]"
            style={selectedTab === "Income" ? styles.selectedTab : {}}
            onPress={() => handleChangeCategoryType("Income")}
          >
            <Text className="text-center" style={[styles.tabText, selectedTab === "Income" ? styles.selectedTabText : {}]}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[33%] py-[5]"
            style={selectedTab === "Total" ? styles.selectedTab : {}}
            onPress={() => handleChangeCategoryType("Total")}
          >
            <Text className="text-center" style={[styles.tabText, selectedTab === "Total" ? styles.selectedTabText : {}]}>Total</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const type = (category: string) => {
    switch (category) {
      case "Salary":
      case "Other Income":
      case "Income":
        return "Income"
      default:
        return "Expense"
    }
  }

  const calculate_transaction = (data: any, p_type: string) => {
    let total = 0
    data.map((item: any) => {
      if (type(item.category) === p_type) {
        total += item.amount
      }
    })
    return total
  }

  const calculate_category = (data: any, p_category: string) => {
    let total = 0
    data.map((item: any) => {
      if (item.category === p_category) {
        total += item.amount
      }
    })
    return total
  }

  

  const chart_data = (data: any, current_tab: string) => {
    const categories_expense = ["House", "Bill", "Travel", "Health", "Shopping", "Food & Drink",
    "Entertainment"]
    const categories_income = ["Salary", "Other Income"]
    let category_list:string[] = []
    if (current_tab === "Expense") category_list = categories_expense
    else if (current_tab === "Income") category_list = categories_income
    let chart_data = []
    let chart_color = []
    for (let i = 0; i < category_list.length; i++) {
      chart_data.push(data[category_list[i]])
      chart_color.push(category_color[category_list[i] as keyof typeof category_color])
    }
    return [chart_data, chart_color]
  }

  const widthAndHeight = 250

  const sum = (data:number[]) => {
    let sum = 0
    data.map(item => {
      sum += item
    })
    return sum
  }

  const data_sample = dataSample
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"#79B4B7"}

      />

      <View className="bg-[#79B4B7] h-[50%] items-center justify-center">
        <Text className="text-white font-medium pb-[30]" style={{ fontSize: 20 }}>Statistics</Text>
        
        {data_sample.length > 0 && data_chart.length > 0 && <PieChart
          widthAndHeight={widthAndHeight}
          series={data_chart}
          sliceColor={color_chart}
          coverRadius={0.75}
          coverFill={'#79B4B7'}
        />}

        {data_chart.length > 0 && selectedTab !== "Total" && 
        <Text className="text-white absolute pt-[40]" style={{fontSize:25, fontWeight:'bold'}}>{sum(data_chart)}</Text>}
      </View>

      {tabBar()}

      {/* Transactions */}
      <ScrollView contentContainerStyle={styles.transactionCardContainer}>

        {selectedTab !== "Total" ? Object.keys(categories_amount).map((item: any, index: any) => (
          type(item) === selectedTab &&
          categories_amount[item as keyof typeof categories_amount] !== 0 && <View style={styles.transactionCard} key={index}>
            <TransactionCard
              category={item}
              amount={categories_amount[item as keyof typeof categories_amount]}
            />
          </View>
        )) :

          (
            <View style={styles.transactionCardContainer}>
              {/* <Text>Expense: {calculate_transaction(data_sample, "Expense")}</Text>
            <Text>Income: {calculate_transaction(data_sample, "Income")}</Text> */}
              <View style={styles.transactionCard}>

                <TransactionCard
                  category="Expense"
                  amount={calculate_transaction(data_sample, "Expense")}
                />
              </View>
              <View style={styles.transactionCard}>

                <TransactionCard
                  category="Income"
                  amount={calculate_transaction(data_sample, "Income")}
                />
              </View>
            </View>
          )
        }

        <View style={{ height: 70 }} key={"Dummy"}></View>

      </ScrollView>

      <View style={styles.navbar}>

        <Navbar navigation={navigation} screen="StatisticScreen" />
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
  selectedTab: {
    backgroundColor: '#E0F7FA',
    borderRadius: 20,
  },
  tabText: {
    color: '#9D9D9D',
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
  },
  selectedTabText: {
    color: '#79B4B7',
    fontWeight: 'bold',
  },
  transactionCardContainer: {
    alignItems: "center",
  },
  transactionCard: {
    marginTop: 10,
    // borderWidth:2 
  },

})
