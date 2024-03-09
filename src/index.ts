import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import RouterApp from "./infra/express/express.app";

const PORT = process.env.PORT || 3000;

RouterApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
