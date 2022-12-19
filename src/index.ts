import express, { Response } from "express";
import dotenv from "dotenv";

import RoleRoute from "./routes/RoleRoute";
import UserRoute from "./routes/UserRoute";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (_, res: Response) => {
  return res.status(200).json({
    message: "api ready...",
  });
});

app.use(RoleRoute);
app.use(UserRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} running on port ${process.env.APP_PORT}`
  );
});
