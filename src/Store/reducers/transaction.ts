import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "transaction",
  initialState: {data:[]},
  reducers: {
    add: (state:any, { payload: props  }) => {
      state.data = [...state.data, ...props]
    },
    updateTransaction: (state:any, { payload: props  }) => {
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i]._id.toString() === props._id) {
          state.data[i] = props
          break
        }
      }
    },
    deleteTransaction: (state:any, { payload: props  }) => {
      state.data = state.data.filter((item:any) => item._id.toString() !== props._id.toString())
    },
    replaceAllData: (state:any, { payload: props  }) => {
      state.data = props
    },
    resetTransactionState: (state:any) => {
      state.data = []
    }
  },
});

export const { add, updateTransaction, deleteTransaction, replaceAllData, resetTransactionState } = slice.actions;

export const transactionReducers = slice.reducer;
