import express from "express";
import { register } from "../controllers/UserController";
import { registerValidation } from "../middlewares/validation/UserValidation";

const route = express.Router();

route.post("/auth/signup", registerValidation, register);

export default route;
