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
        addPopulerMovies:(state, action) => {
            state.PopulerMovies = action.payload;
        },
        addTopRatedMovies:(state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrailerVideos:(state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addMovies, addTrailerVideos, addTopRatedMovies, addUpcomingMovies, addPopulerMovies} = movieSlice.actions;
export default movieSlice.reducer;