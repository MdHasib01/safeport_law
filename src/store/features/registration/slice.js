import { createSlice } from "@reduxjs/toolkit";
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
    state: "",
  },
  paymentInfo: {},
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
    setSelectedSrvice: (state, action) => {
      state.selectedSrvice = action.payload;
    },
  },
});

export const { setPersonalInfo, setPaymentInfo, setSelectedSrvice } =
  registrationSlice.actions;

export default registrationSlice.reducer;
