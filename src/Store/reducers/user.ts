import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {user_id:''},
  reducers: {
    addUserId: (state:any, { payload: user_id  }) => {
      state.user_id = user_id
    },
  },
});

export const { addUserId } = slice.actions;

export const userReducers = slice.reducer;
