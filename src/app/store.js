import { configureStore } from '@reduxjs/toolkit';
import imgSlice from '../redux/imgSlice'

export const store = configureStore({
  reducer: {
      img:imgSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
})