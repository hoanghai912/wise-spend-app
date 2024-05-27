import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Navbar } from "@/Components"

export const StatisticScreen = ({ navigation }: any) => {

  return (
    <View style={style.container}>
      <Text>
        StatisticScreen
      </Text>

      <View style={style.navbar}>

        <Navbar navigation={navigation} screen="StatisticScreen"/>
      </View>
    </View>

  )
};

const style = StyleSheet.create({
  container: {
    paddingTop: 44,
    flex: 1,
  },
  navbar: {
    position: "absolute",
    bottom: -2,
  }

})
