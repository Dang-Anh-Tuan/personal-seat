import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        name: "Dang Anh Tuan",
        code: "2101",
        seatID: 1,
      },
      {
        name: "Pham Xuan Duc",
        code: "2102",
        seatID: null,
      },
      {
        name: "Vu Trong Chuong",
        code: "2103",
        seatID: null,
      },
    ],
    currentUser: null,
  },
  reducers: {
    changeSeatId(state, action) {
      const userChangeSeatId = state.users.find(
        (user) => user.code === action.payload.code
      );
      userChangeSeatId.seatID = action.payload.seatID;
    },

    getCurrentUser(state, action) {
      state.currentUser = state.users.find(
        (user) => user.seatID === action.payload
      );
    },
  },
});

export const { changeSeatId, getCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;
