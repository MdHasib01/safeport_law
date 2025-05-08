import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  paymentInfo: {},
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
  },
});

export const { setPersonalInfo, setPaymentInfo } = registrationSlice.actions;

export default registrationSlice.reducer;
