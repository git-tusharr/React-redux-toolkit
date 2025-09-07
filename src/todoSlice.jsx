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
        },
        taskDelete:(state,actions)=>{
            console.log(actions.payload.id);
            state.task=state.task.filter(item=>item.id!=actions.payload.id)
        },
        taskComplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].status=true;
                }
            }
        },
        taskInComplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].status=false;
                }
            }
        },
        editTaskSave:(state,actions)=>{
             for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].work=actions.payload.newTask;
                }
             }
        }
        
    }

})

export const {addTask,taskDelete,taskComplete,taskInComplete,editTaskSave} =todoSlice.actions;
export default todoSlice.reducer;


