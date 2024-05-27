import React, { useState, useEffect } from "react";

import { UserScreen } from "./UserScreen";

export const UserScreenContainer = ({navigation}:any) => {
  return <UserScreen navigation={navigation} />;
};
