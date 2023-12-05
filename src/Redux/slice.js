import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false,
  proUpdate:false,
  adDelete:false
}

export const authSlice = createSlice({
  name: 'login-stat',
  initialState,
  reducers: {
    enter: (state) => {
      
      state.login = true
    },
    exit:(state)=>{
        state.login = false
    },
    profileUpdated:(state)=>{
      state.proUpdate = (!state.proUpdate)
    },
    adDeleteStat:(state)=>{
      state.adDelete=(!state.adDelete)
    }
    
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { enter,exit,profileUpdated,adDeleteStat } = authSlice.actions

export default authSlice.reducer