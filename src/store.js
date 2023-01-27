import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import popupInfoReducer from "./features/popupInfo/popupInfoSlice";
import seatReducer from "./features/seat/seatSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    popupInfo: popupInfoReducer,
    seat: seatReducer,
  },
});
