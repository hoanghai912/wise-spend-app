import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Navbar } from "@/Components"

export const PlanScreen = ({ navigation }: any) => {

  return (
    <View style={style.container}>
      <Text>
        PlanScreen
      </Text>

      <View style={style.navbar}>

        <Navbar navigation={navigation} screen="PlanScreen"/>
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
