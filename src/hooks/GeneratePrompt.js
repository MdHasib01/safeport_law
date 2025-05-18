"use client";

import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
});

export async function generatePrompt(systemPrompt, userPrompt) {
  // Convert the array of Q&A into a formatted string
  const qaText = userPrompt
    .map(
      (item, index) =>
        `Q${index + 1}: ${item.question}\nA${index + 1}: ${item.answer}`
    )
    .join("\n\n");

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      { role: "user", parts: [{ text: systemPrompt + "\n\n" + qaText }] },
    ],
  });

  const text =
    result.candidates?.[0]?.content?.parts?.[0]?.text || "No response found";

  console.log("Gemini says:", text);
  return text;
}
