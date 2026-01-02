import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false,
        gptSearchMovies:[],
        movieName:null,
    },
    reducers:{
        addToggleGptSearchView:(state)=> {
            state.gptSearchView = !state.gptSearchView;
        },
        addGptSearchMovies:(state, action)=> {
            const {movieName, movieResults} = action.payload;
            state.movieName = movieName;
            state.gptSearchMovies = movieResults;
        },
        addClearGptSearchMovies:(state)=> {
            state.gptSearchMovies = [];
            state.movieName = null;
        }
    }
});

export const {addToggleGptSearchView, addGptSearchMovies, addClearGptSearchMovies} = gptSlice.actions;
export default gptSlice.reducer;