import { Login } from "./Login";
import { Signup } from "./Signup";
import React, { useState, useEffect } from "react";

export const LoginContainer = ({route, navigation}:any) => {
  const {isSignup} = route.params;
  return isSignup ? <Signup navigation={navigation}/> : <Login navigation={navigation}/>;
};
