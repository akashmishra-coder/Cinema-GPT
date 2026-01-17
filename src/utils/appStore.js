import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import savedReducer from "./savedSlice"


const appStore = configureStore({
    reducer: {
        // Add your reducers here 
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        saveMovie:savedReducer,
    },
})

export default appStore;