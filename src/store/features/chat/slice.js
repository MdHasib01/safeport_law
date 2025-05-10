import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionNo: 0,
  tutorial: 1,
  selectedQuestion: "",
  conversation: [],
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
    setSelectedQuestion: (state, action) => {
      state.selectedQuestion = action.payload;
    },
    setConversation: (state, action) => {
      state.conversation = [...state.conversation, action.payload];
    },
  },
});

export const {
  setQuestionNo,
  setTutorial,
  setSelectedQuestion,
  setConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
