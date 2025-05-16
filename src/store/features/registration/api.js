import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../utils/config";

export const createAccount = createAsyncThunk(
  "registration/createAccount",
  async ({ payload, navigate }, { rejectWithValue }) => {
    try {
      console.log("pl", payload);
      const response = await fetch(
        `${config.baseURL}/${config.routes.accountRegister}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      console.log("data", data);

      if (!response.ok) {
        console.log("data", data);
        return rejectWithValue(data.message || "Registration failed");
      }

      navigate("/signup");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
