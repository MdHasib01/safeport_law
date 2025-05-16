import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../utils/config";

// const accesToken = localStorage.getItem("token");

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${config.baseURL}/${config.routes.login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Login failed");
      }

      return data.data; // assuming { data: {...userData} }
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${config.baseURL}/${config.routes.signup}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      if (
        response.status === 401 ||
        response.status === 403 ||
        response.status === 404 ||
        response.status === 500
      ) {
        localStorage.removeItem("token");
      }
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${config.baseURL}/${config.routes.verifyToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      if (!response.ok) {
        localStorage.removeItem("token");
        return rejectWithValue(response.status);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
