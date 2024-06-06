import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { OnboardingContainer } from "@/Screens/Onboarding";
import { LoginContainer } from "@/Screens/Login";
import { HomeScreenContainer } from "@/Screens/HomeScreen";
import { StatisticScreenContainer } from "@/Screens/StatisticScreen";
import { PlanScreenContainer } from "@/Screens/PlanScreen";
import { UserScreenContainer } from "@/Screens/UserScreen";
import { AddTransactionContainer } from "@/Screens/AddTransaction";
import { ChooseCategory } from "@/Screens/AddTransaction/ChooseCategory";
import { ChooseCategory as EditChooseCategory } from "@/Screens/EditTransaction/ChooseCategory";
import { EditTransactionContainer } from "@/Screens/EditTransaction";
import { EditProfile } from "@/Screens/UserScreen/EditProfile";
import { ChangePassword } from "@/Screens/UserScreen/ChangePassword";
import { AboutUs } from "@/Screens/UserScreen/AboutUs";
import { TrueOnboarding } from "@/Screens/Onboarding/TrueOnboarding";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.HOMESCREEN]: undefined;
  [RootScreens.STATISTICS]: undefined;
  [RootScreens.PLAN]: undefined;
  [RootScreens.USER]: undefined;
  [RootScreens.ADDTRANSACTION]: undefined;
  [RootScreens.CHOOSECATEGORY]: undefined;
  [RootScreens.EDITTRANSACTION]: undefined;
  [RootScreens.EDITCHOOSECATEGORY]: undefined;
  [RootScreens.EDITPROFILE]: undefined;
  [RootScreens.CHANGEPASSWORD]: undefined;
  [RootScreens.ABOUTUS]: undefined;
  [RootScreens.TRUEONBOARDING]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen 
          name={RootScreens.TRUEONBOARDING}
          component={TrueOnboarding}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingContainer}
        />
        <RootStack.Screen 
          name={RootScreens.LOGIN}
          component={LoginContainer}
        />
        <RootStack.Screen
          name={RootScreens.HOMESCREEN}
          component={HomeScreenContainer}
          options={{
            animation:"none",
          }}
        />
        <RootStack.Screen
          name={RootScreens.STATISTICS}
          component={StatisticScreenContainer}
          options={{
            animation:"none",
          }}
        />
        <RootStack.Screen
          name={RootScreens.PLAN}
          component={PlanScreenContainer}
          options={{
            animation:"none",
          }}
        />
        <RootStack.Screen
          name={RootScreens.USER}
          component={UserScreenContainer}
          options={{
            animation:"none",
          }}
        />
        <RootStack.Screen
          name={RootScreens.ADDTRANSACTION}
          component={AddTransactionContainer}
          options={{
            animation:"slide_from_bottom",
          }}
        />
        <RootStack.Screen
          name={RootScreens.CHOOSECATEGORY}
          component={ChooseCategory}
          options={{
            animation:"slide_from_right",
          }}
        />
        <RootStack.Screen
          name={RootScreens.EDITTRANSACTION}
          component={EditTransactionContainer}
          options={{
            animation:"slide_from_bottom",
          }}
        />
        <RootStack.Screen
          name={RootScreens.EDITCHOOSECATEGORY}
          component={EditChooseCategory}
          options={{
            animation:"slide_from_right",
          }}
        />
        <RootStack.Screen 
          name={RootScreens.EDITPROFILE}
          component={EditProfile}
        />
        <RootStack.Screen 
          name={RootScreens.CHANGEPASSWORD}
          component={ChangePassword}
        />
        <RootStack.Screen 
          name={RootScreens.ABOUTUS}
          component={AboutUs}
        />
        

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
