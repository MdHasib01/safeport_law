import { createSlice } from "@reduxjs/toolkit";
import { createAccount } from "./api";
import { toast } from "react-toastify";
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const initialState = {
  personalInfo: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    homeAddress: "",
    appartment: "",
    zipCode: "",
    city: "",
    state: states[0],
  },
  paymentInfo: {
    cardNumber: "",
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
  },
  selectedSrvice: 1,
  servicePlan: [
    {
      id: 1,
      name: "Credit Cleanse+",
      price: "$129.99",
    },
    {
      id: 2,
      name: "Credit Cleanse",
      price: "$89.99",
    },
  ],
  states,
  loading: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setPaymentInfoStore: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setSelectedSrvice: (state, action) => {
      state.selectedSrvice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAccount.fulfilled, (state) => {
        state.loading = false;
        toast.success("Account created successfully");
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload || "Something went wrong");
      });
  },
});

export const { setPersonalInfo, setPaymentInfoStore, setSelectedSrvice } =
  registrationSlice.actions;

export default registrationSlice.reducer;
