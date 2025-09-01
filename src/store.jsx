import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";




const store =configureStore({
    reducer:{
        myColor:colorReducer
    }
});
export default store;