import express, { Request, Response, Router } from "express";

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);
app.listen(3333, () => "Server running on port 3333. \nhttp://localhost:3333/");
