import { createSlice } from "@reduxjs/toolkit";
import { generateCreditReport, generateCreditScore } from "./api";

const initialState = {
  questionNo: 0,
  tutorial: 1,
  selectedQuestion: "",
  conversation: [],
  loading: false,
  creditScore: "",
  report: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(generateCreditScore.pending, (state) => {
        state.loading = true;
      })
      .addCase(generateCreditScore.fulfilled, (state, action) => {
        state.loading = false;
        state.creditScore = action.payload;
      })
      .addCase(generateCreditScore.rejected, (state) => {
        state.loading = false;
      })
      .addCase(generateCreditReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(generateCreditReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })
      .addCase(generateCreditReport.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setQuestionNo,
  setTutorial,
  setSelectedQuestion,
  setConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
