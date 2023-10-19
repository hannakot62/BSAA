import { configureStore } from '@reduxjs/toolkit'
import teachersReducer from "./slices/teachersSlice";
import thunk from "redux-thunk";
import subjectsReducer from "./slices/subjectsSlice";


export const store = configureStore({
    reducer: {
        teachers: teachersReducer,
        subjects: subjectsReducer
    },
    middleware: [thunk]
})






