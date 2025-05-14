import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/registration/slice";
import chatReducer from "./features/chat/slice";
import authReducer from "./features/auth/slice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    chat: chatReducer,
    auth: authReducer,
  },
});
