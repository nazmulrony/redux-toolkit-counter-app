import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment: state => {
            state.count = state.counter + 1
        },
        decrement: state => state.count = state.count - 1,
        reset: state => state.count = 0
    }
})
//exporting the actions
export const { increment, decrement, reset } = counterSlice.actions;
//exporting the reducer
export default counterSlice.reducer;