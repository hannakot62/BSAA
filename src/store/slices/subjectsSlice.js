import {createSlice} from "@reduxjs/toolkit";


export const fetchSubjects = () => {
    return function (dispatch) {
        fetch("https://bgaa.by/test")
            .then(response => response.json())
            .then(json => {
                dispatch(getSubjects(json.data))
            })
    }
}

export const subjectsSlice = createSlice({
    name: "subjects",
    initialState: {subjects: []},
    reducers: {
        getSubjects: (state, action) => {
            state.subjects = action.payload
        }
    }
})


export const {getSubjects} = subjectsSlice.actions
export default subjectsSlice.reducer
