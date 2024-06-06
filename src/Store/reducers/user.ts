import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {user_id:''},
  reducers: {
    addUserId: (state:any, { payload: user_id  }) => {
      state.user_id = user_id
    },
    resetUserIdState: (state) => {
      state.user_id = ''
    }
  },
});

export const { addUserId, resetUserIdState } = slice.actions;

export const userReducers = slice.reducer;
