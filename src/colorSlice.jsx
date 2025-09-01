import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"myColor",
    initialState:{
        color:"pink"
    },
    reducers:{
        colorChange:(state)=>{
            state.color="red";
        }
        
    }

})

export const {colorChange} =colorSlice.actions;
export default colorSlice.reducer;