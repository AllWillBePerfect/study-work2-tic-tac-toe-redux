import {createSlice} from "@reduxjs/toolkit";

export const counterRedux = createSlice({
    name: 'counterRedux',
    initialState: {
        history: [Array(9).fill(null)],
        currentMove: 0,
        xIsNext: 0 % 2 === 0,
        currentSquares: [Array(9).fill(null)]
    },
    reducers: {
        handlePlay: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            if (state.xIsNext) {
                state.currentSquares[action.payload] = 'X';
            } else {
                state.currentSquares[action.payload] = 'O';
            }
            console.log(":::::arguments nextSquares: " + action.payload
                .toString())
            const nextHistory = [...state.history.slice(0, state.currentMove + 1), state.currentSquares];
            console.log("click" + action.payload.toString() + " -- currentMove = " + state.currentMove.toString() + " -- currentSquares = " + state.currentSquares.toString() + " -- history = " + state.history.toString())
            state.history = nextHistory;
            state.currentMove = nextHistory.length - 1;
            state.xIsNext = state.currentMove % 2 === 0
        },

    },
})

// Action creators are generated for each case reducer function
export const { handlePlay } = counterRedux.actions
export default counterRedux.reducer