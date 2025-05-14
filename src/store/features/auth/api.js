import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../utils/config";

// const accesToken = localStorage.getItem("token");

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch(`${config.baseURL}/${config.routes.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  localStorage.setItem("token", data?.data?.accessToken);
  return data;
});
