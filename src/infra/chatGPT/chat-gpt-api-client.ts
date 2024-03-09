import OpenAI from "openai";

export class ChatGPTApiClient {
  getClient = () => {
    const openAIClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return openAIClient;
  };
}
