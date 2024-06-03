import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "transaction",
  initialState: {data:[]},
  reducers: {
    add: (state:any, { payload: props  }) => {
      state.data = [...state.data, props]
    },
  },
});

export const { add } = slice.actions;

export const transactionReducers = slice.reducer;
