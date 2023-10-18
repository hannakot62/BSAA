import { configureStore } from '@reduxjs/toolkit'
import {subjectsReducer} from "./reducers/subjectsReducer";
import {teachersReducer} from "./reducers/teachersReducer";


export const store = configureStore({reducer:{
    subjects: subjectsReducer,
    teachers: teachersReducer
}})





