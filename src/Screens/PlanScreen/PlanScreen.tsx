import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Navbar } from "@/Components"

import PlanImg from "../../../assets/materials/Plan.svg"

export const PlanScreen = ({ navigation }: any) => {

  return (
    <View style={style.container}>
      <PlanImg />

      <View style={style.navbar}>

        <Navbar navigation={navigation} screen="PlanScreen"/>
      </View>
    </View>

  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    position: "absolute",
    bottom: -2,
  }

})
