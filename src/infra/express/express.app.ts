import cors from "cors";
import express, { Request, Response, Router } from "express";
import storyRoute from "./routes/story.routes";

const app = express();
const route = Router();

route.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "This is a private API and can't be used by unauthorized people",
  });
});

app.use(cors());
app.use(express.json());
app.use(route);
app.use(storyRoute);

const RouterApp = app;

export default RouterApp;
