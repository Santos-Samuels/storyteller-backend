import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

import connectPrismaDatabase from "./infra/database/prisma/prisma.config";
import roleRoutes from "./infra/routes/express/role.routes";
import storyRoutes from "./infra/routes/express/story.routes";
import userRoutes from "./infra/routes/express/user.routes";

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", roleRoutes);
app.use("/api", userRoutes);
app.use("/api", storyRoutes);

// app.get("/", (_req: Request, res: Response) => {
//   res.json({
//     message: "This is a private API and can't be used by unauthorized people",
//   });
// });

connectPrismaDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((_error) => {
    process.exit(1);
  });
