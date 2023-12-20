import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: [],
}

export const expenseSlice  = createSlice({
  name: 'express',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = expenseSlice.actions

export default expenseSlice.reducer