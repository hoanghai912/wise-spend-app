import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { Navbar } from "@/Components"

export const UserScreen = ({ navigation }: any) => {

  return (
    <View style={style.container}>
      <Text>
      UserScreen
      </Text>

      <View style={style.navbar}>

        <Navbar navigation={navigation} screen="UserScreen"/>
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
