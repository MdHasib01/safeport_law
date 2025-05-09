import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/registration/slice";
import chatReducer from "./features/chat/slice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    chat: chatReducer,
  },
});
