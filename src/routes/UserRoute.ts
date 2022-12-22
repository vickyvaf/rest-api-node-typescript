import express from "express";
import { register, login } from "../controllers/UserController";
import { registerValidation } from "../middlewares/validation/UserValidation";

const route = express.Router();

route.post("/auth/signup", registerValidation, register);
route.post("/auth/signin", login);

export default route;
