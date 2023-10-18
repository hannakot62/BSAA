import {createSlice} from "@reduxjs/toolkit";


export const fetchTeachers = () => {
    return function (dispatch) {
        fetch("https://bgaa.by/test")
            .then(response => response.json())
            .then(json => {
                dispatch(getTeachers(json.teachers))
            })
    }
}

export const teachersSlice = createSlice({
    name: "teachers",
    initialState: {teachers: []},
    reducers: {
        getTeachers: (state, action) => {
            state.teachers = action.payload
        }
    }
})


export const {getTeachers} = teachersSlice.actions
export default teachersSlice.reducer
