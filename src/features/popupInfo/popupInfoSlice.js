import { createSlice } from "@reduxjs/toolkit";

const popupInfoSlice = createSlice({
  name: "popupInfo",
  initialState: {
    show: false,
  },
  reducers: {
    changeShowPopupInfo(state, action) {
      state.show = action.payload;
    },
  },
});

export const { changeShowPopupInfo } = popupInfoSlice.actions;
export default popupInfoSlice.reducer;
