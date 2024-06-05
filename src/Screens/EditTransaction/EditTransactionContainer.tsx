import React, { useState, useEffect } from "react";

import { EditTransaction } from "./EditTransaction";

export const EditTransactionContainer = ({route, navigation}:any) => {
  const props = route.params? route.params : undefined;
  return <EditTransaction navigation={navigation} props={props}/>;
};
