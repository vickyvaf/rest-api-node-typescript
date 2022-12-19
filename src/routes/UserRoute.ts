import express from "express";
import { register } from "../controllers/UserController";

const route = express.Router();

route.post("/auth/signup", register);

export default route;
