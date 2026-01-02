import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";


const appStore = configureStore({
    reducer: {
        // Add your reducers here 
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
})

export default appStore;