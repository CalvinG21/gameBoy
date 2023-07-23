import { createSlice } from "@reduxjs/toolkit";

let initialStateValue={
    strikes:0,
    hits:0,
    targetWord:'',
    lettersGuessed:'',
    gameState:0 ,//-1 == lost , 0==start , 1==won

}

export const gameStateSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "game",
    // This is the initial state for your slice of state. This can be
    // anything from an empty array or other data structure that your
    // application requires to avoid prop drilling.
    // For this example, we use a number.
    initialState: {
        value: initialStateValue,
    },
    // As indicated before. The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
            // This is one example of an action type the reducer will identify
            // how to manipulate this slice of state.
            // In our case, we want the increment action type to add one to our
            // value, which is now set to zero in our initial state.
            increment: (state) => {
                state.value.strikes += 1;
            },
            
            correctGuess:(state) => {
                state.value.hits += 1;
            },

            // The third example is probably the most important as this function
            // passes the action value or payload to our reducer to increment or
            // decrement the value of the state depending on what the user enters
            // or submits.
            setTargetWord: (state, action) => {
                state.value.targetWord = action.payload.targetWord;
            },

            updateLettersGuessed: (state, action) => {
                state.value.lettersGuessed += action.payload.lettersGuessed;
            },

            updateGameState:(state, action)=>{
                state.value.gameState = action.payload.gameState;
            },

            restartGame:(state)=>{
                state.value=initialStateValue;
            }


    },
});
// Action creators are generated for each case reducer function.
export const { increment, setTargetWord, updateLettersGuessed,correctGuess,updateGameState,restartGame} =gameStateSlice.actions;

// Exporting the reducer function we will implement into our store, previously created.
export default gameStateSlice.reducer