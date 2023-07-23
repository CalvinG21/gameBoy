import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";

// The configureStore function will automatically set up an empty store for you
// with the relevant settings you will need in the future.
export default configureStore({
    reducer: {
        game: gameReducer,
    },
});