import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"mytodo",
    initialState:{ 
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        }
        
    }

})

export const {addTask} =todoSlice.actions;
export default todoSlice.reducer;