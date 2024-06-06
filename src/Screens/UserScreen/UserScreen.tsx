import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from "react-native"

import { Navbar } from "@/Components"

import IconAvatarDefault from "../../../assets/materials/avatar_default.svg"

import { useSelector, useDispatch } from "react-redux"
import { resetTransactionState, resetUserIdState } from "@/Store/reducers"
import { RootScreens } from ".."


export const UserScreen = ({ navigation }: any) => {
  const URL_API = "https://wise-spend-backend-2.vercel.app"
  const user_id = useSelector((state: any) => state.user.user_id)
  const dispatch = useDispatch()

  const [user_data, setUserData] = useState({})

  useEffect(() => {
    fetch(`${URL_API}/user/${user_id}`)
      .then(res => res.json())
      .then(res => {
        setUserData(res)
      })
    
    // console.log(user_data)
  })
  
  const validVariable = (data: any) => {
    if (Object.keys(data).length === 0) return false;
    return true
  }

  const name = (user_data:any) => {
    if (validVariable(user_data)) {
      if (user_data.lastName !== "undefined") {
        return user_data.firstName + ' ' + user_data.lastName
      }
      else if (user_data.firstName !== "undefined") {
        return user_data.firstName
      }
      else return "Name"
    }
  }

  const handleLogOut = () => {
    dispatch(resetTransactionState())
    dispatch(resetUserIdState())
    navigation.navigate(RootScreens.LOGIN, {isSignup:false})
  }

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={"#79B4B7"}
      />

      <View className="bg-[#79B4B7] h-[15%]">
        <Text style={{ position: "absolute", bottom: 10, fontSize: 25, color: "#fff", fontWeight: "500", left: 20 }}>My Profile</Text>
      </View>

      {/* Body */}
      <View className="bg-[#F3EEEA] h-[100%]">
        <Text style={{ padding: 20, color: "#5E5E5E", fontSize: 20, fontWeight: "500" }}>Personal Details</Text>
        <View className="items-center">
          <View className="h-[220] bg-white rounded-[10px] w-[90%] justify-center">
            <View className="flex-row items-center ml-[10]">
              <IconAvatarDefault width={80} height={80} />
              <View className="ml-[10]">
                <Text style={{ color: "#5E5E5E", fontSize: 20, fontWeight: "500" }}>{name(user_data)}</Text>
                <Text style={{ color: "#9D9D9D", fontSize: 15, fontWeight: "500" }}>{validVariable(user_data)?(user_data as {email:string}).email:"Email"}</Text>
              </View>
            </View>
            <TouchableOpacity className="mt-[30] mx-auto h-[65] rounded-[30px] w-[90%] bg-[#79B4B7] items-center justify-center"
              onPress={() => navigation.navigate(RootScreens.EDITPROFILE, {user_data:user_data})}
            >
              <Text style={{fontSize:20, fontWeight:"400", color:"#fff"}}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Another Button */}
        <View className="w-[100%] items-center">
          <TouchableOpacity className="bg-white h-[65] rounded-[10px] w-[90%] items-center justify-between mt-[20] flex-row"
            onPress={() => navigation.navigate(RootScreens.CHANGEPASSWORD, {user_data:user_data})}
          >
            <Text style={{fontSize:20, fontWeight:"400", color:"#5E5E5E", paddingLeft: 20}}>Change Password</Text>
            <Text style={{fontSize:40, fontWeight:"300", color:"#5E5E5E", paddingRight:20}}>{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white h-[65] rounded-[10px] w-[90%] items-center justify-between mt-[20] flex-row"
            onPress={() => navigation.navigate(RootScreens.ABOUTUS)}
          >
            <Text style={{fontSize:20, fontWeight:"400", color:"#5E5E5E", paddingLeft: 20}}>About Us</Text>
            <Text style={{fontSize:40, fontWeight:"300", color:"#5E5E5E", paddingRight:20}}>{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-[30] mx-auto h-[40] rounded-[30px] w-[30%] bg-[#79B4B7] items-center justify-center"
            onPress={() => handleLogOut()}
          >
            <Text style={{fontSize:15, fontWeight:"400", color:"#fff"}}>LogOut</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={style.navbar}>

        <Navbar navigation={navigation} screen="UserScreen" />
      </View>
    </View>

  )
};

const style = StyleSheet.create({
  container: {
    // paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  navbar: {
    position: "absolute",
    bottom: -2,
  }

})
