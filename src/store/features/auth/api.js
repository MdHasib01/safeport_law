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
  return data.data;
});

export const signup = createAsyncThunk("auth/signup", async (credentials) => {
  const response = await fetch(`${config.baseURL}/${config.routes.signup}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();

  return data;
});

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (credentials) => {
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
    if (
      response.status === 401 ||
      response.status === 403 ||
      response.status === 404 ||
      response.status === 500
    ) {
      localStorage.removeItem("token");
    }

    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }
);
