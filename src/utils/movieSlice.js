import { createSlice } from "@reduxjs/toolkit";
import { add } from "lodash";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos:(state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addMovies, addTrailerVideos} = movieSlice.actions;
export default movieSlice.reducer;