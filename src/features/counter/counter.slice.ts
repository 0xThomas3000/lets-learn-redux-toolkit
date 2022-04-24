// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* The type of the State */
interface CounterState {
  value: number;
}

/* Define initial state value for this slice */
const initialState: CounterState = {
  value: 0,
};

/* Define the Slice */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /* Define the different types of logic and updates */
    // increment (every time an action is dispatched, add "1" to the counter)
    incremented(state) {
      // it'ok to do this because immer makes it immutable
      state.value++;
    },
    // decrement
    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
