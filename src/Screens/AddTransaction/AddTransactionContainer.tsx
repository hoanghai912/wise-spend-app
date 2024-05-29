import React, { useState, useEffect } from "react";

import { AddTransaction } from "./AddTransaction";

export const AddTransactionContainer = ({route, navigation}:any) => {
  const props = route.params? route.params : undefined;
  return <AddTransaction navigation={navigation} props={props}/>;
};
