import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  img: null,
  range:{},
  color:"",
  generate:false
}

export const imgSlice = createSlice({
  name: 'img',
  initialState,
  reducers: {
    getImg: (state, {payload}) => {
     state.img = payload;
    },
    getRange:(state, {payload}) =>{
      const {name, value} = payload;
      state.range = {...state.range, [name]:value};
    },
    getColor:(state, {payload}) =>{
      state.color = payload;
    },
    generateBtn:(state, {payload}) =>{
      state.generate = payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getImg, getRange, getColor, generateBtn } = imgSlice.actions

export default imgSlice.reducer