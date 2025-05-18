import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatePrompt } from "../../../hooks/GeneratePrompt";
const credit_score_prompt = `
I am giving some questions and answers. Based on them, generate a business credit score (only a number between 0–100). Do not include any explanation, context, or text—just return the number.
`;
const credit_report_prompt = `
Using the provided Q&A conversation, generate a detailed and structured business credit report. Include sections like: Credit Overview, Risk Assessment, Recommendations, and How to Improve Score. Return the report content in plain text that will be used inside a PDF document (no HTML or XML).
`;
export const generateCreditScore = createAsyncThunk(
  "chat/generateCreditScore",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await generatePrompt(credit_score_prompt, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const generateCreditReport = createAsyncThunk(
  "chat/generateCreditReport",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await generatePrompt(credit_report_prompt, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
