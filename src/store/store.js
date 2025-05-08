import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/registration/slice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
