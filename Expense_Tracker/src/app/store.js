import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from '../features/expenseSlice'


export const store = configureStore({
  reducer: {
    expenseSlice: expenseSlice,
  },
})