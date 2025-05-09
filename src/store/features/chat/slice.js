import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionNo: 0,
  tutorial: 1,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setQuestionNo: (state, action) => {
      state.questionNo = action.payload;
    },
    setTutorial: (state, action) => {
      state.tutorial = action.payload;
    },
  },
});

export const { setQuestionNo, setTutorial } = chatSlice.actions;

export default chatSlice.reducer;
