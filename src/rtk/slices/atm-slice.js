import { createSlice } from "@reduxjs/toolkit";

export const atmSlice = createSlice({
    initialState : 100,
    name : "atmSlice",
    reducers :{
        withdraw : (state, action) =>{ return state = state - action.payload},
        deposite : (state, action) =>{ return state = state + action.payload}
    }
});

export const {withdraw, deposite}= atmSlice.actions
export default atmSlice.reducer;