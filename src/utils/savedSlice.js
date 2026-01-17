import { createSlice } from "@reduxjs/toolkit"


const savedSlice = createSlice({
    name:'saved',
    initialState:{
        movieSaved: JSON.parse(localStorage.getItem("Movies")) || [],
    },
    reducers:{
        addSaveMovie:(state, action)=>{
            const aleadyExist = state.movieSaved.find(item => item.id === action.payload.id)

            if(!aleadyExist){
                state.movieSaved.push(action.payload)
                localStorage.setItem("Movies", JSON.stringify(state.movieSaved))
            }
        },
        addRemoveMovie:(state, action)=>{
            state.movieSaved = state.movieSaved.filter((item)=>(
                item.id !== action.payload.id
            ))
             localStorage.setItem("Movies", JSON.stringify(state.movieSaved))

        },
        addClearAllMovie:(state)=>{
            state.movieSaved = []
            localStorage.removeItem("Movies")
        },
    }
})

export const {addClearAllMovie, addRemoveMovie, addSaveMovie } = savedSlice.actions;

export default savedSlice.reducer;