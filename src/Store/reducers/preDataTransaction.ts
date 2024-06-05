import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "predatatransaction",
  initialState: {data:{}},
  reducers: {
    addPreData: (state:any, { payload: props  }) => {
      state.data = props
    },
  },
});

export const { addPreData } = slice.actions;

export const predatatransactionReducers = slice.reducer;
