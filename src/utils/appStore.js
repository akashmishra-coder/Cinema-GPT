import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";


const appStore = configureStore({
    reducer: {
        // Add your reducers here 
        user: userReducer,
        movie: moviesReducer,
    },
})

export default appStore;