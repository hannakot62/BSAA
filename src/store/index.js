import { configureStore } from '@reduxjs/toolkit'
import teachersReducer from "./slices/teachersSlice";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: {
        teachers: teachersReducer
    },
    middleware: [thunk]
})






