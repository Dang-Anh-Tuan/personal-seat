import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    currentSeatId: null,
  },
  reducers: {
    changeCurrentSeatId(state, action) {
      state.currentSeatId = action.payload;
    },
  },
});

export const { changeCurrentSeatId } = seatSlice.actions;
export default seatSlice.reducer;
