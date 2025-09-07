import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoSlice";

const store =configureStore({
    reducer:{
        mytodo:myReducer
    }
});
export default store;