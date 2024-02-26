import cors from "cors";
import express, { Request, Response, Router } from "express";
import OpenAI from "openai";
import { foo3 } from "./foo/foo";
import { GPTHistory } from "./interfaces";

const dotenv = require("dotenv");
dotenv.config();

const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const route = Router();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const formmatHistory = (history: string): GPTHistory => {
  const formattedHistoryString = history.replace(/\n|```|json/g, "");
  const formattedHistory: GPTHistory = JSON.parse(formattedHistoryString);

  return formattedHistory;
};

route.get("/", async (req: Request, res: Response) => {
  const formattedHistory: GPTHistory = formmatHistory(foo3);
  res.json(formattedHistory);
});

route.post("/chat", async (req: Request, res: Response) => {
  try {
    const { theme } = req.body;
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Crie uma história na qual acontece um dialógo entre dois personagens sobre o tema ${theme}.
          
          Critérios de aceite:
          - O diálogo deve ser não linear, ambos podem fazer perguntas ou afirmativas sobre o tema.
          - Deve haver 20 cenasa;
          - Deve incluir 4 pilares desse tema em "ramifications";
          - Resumo da história deve ser em "resume";
          - O retorno é no formato .json;
          - O Json deve incluir TODAS as cenas;
      
      A saida deve respeitar o seguinte formato:
          export type EmotionTypes =
            | "happy"
            | "sad"
            | "surprised"
            | "thinking"
            | "confused"
            | "very-happy"
            | "neutral";
          
          export type ScenePosition = "left" | "right";
      
          export interface IHistory {
            theme: string;
            resume: string;
            ramifications?: string[];
          }
         
          export interface IScene {
            speech: string;
            emotion: EmotionTypes;
            position: ScenePosition;
          }`,
        },
      ],
      model: OPENAI_MODEL,
    });
  
    const formattedHistory: GPTHistory = formmatHistory(
      completion.choices[0].message.content || ""
    );
  
    res.json(formattedHistory);
  } catch (error) {
    console.error(error);
  }
});

app.use(route);
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}. \nhttp://localhost:${PORT}/`)
);
