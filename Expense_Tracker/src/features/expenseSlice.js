import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: []
}

export const expenseSlice  = createSlice({
  name: 'express',
  initialState,
  reducers: {
    fetch_datas: function (state, action) {
        console.log(state)
        console.log(action.payload)
        return{
          ...state,
          datas: action.payload
        }
    }
    }
})

// Action creators are generated for each case reducer function
export const { fetch_datas } = expenseSlice.actions

export default expenseSlice.reducer