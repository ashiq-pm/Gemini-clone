/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    // eslint-disable-next-line no-unused-vars
    HarmCategory,
    // eslint-disable-next-line no-unused-vars
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyBDsJ9edW16SqKH8IandKyvwPjv7lI1jvY";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  // eslint-disable-next-line no-unused-vars
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }

  export default run;