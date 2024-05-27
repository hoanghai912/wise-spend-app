import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Navbar } from "@/Components"

export const HomeScreen = ({ navigation }: any) => {

  return (
    <View style={style.container}>
      <Text>
        HomeScreen
      </Text>
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
    bottom: 0,
  }

})
