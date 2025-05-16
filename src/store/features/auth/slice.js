import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyToken } from "./api";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token") || null,
  tokenVerified: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.loading = false;
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.accessToken);
        toast.success("Login successful");
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload || "Login failed");
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        toast.success("Signup successful");
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload || "Signup failed");
      })
      .addCase(verifyToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.loading = false;
        state.tokenVerified = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.loading = false;
        state.tokenVerified = false;
        state.error = action.error.message;
        toast.error(action.payload || "Token verification failed");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
