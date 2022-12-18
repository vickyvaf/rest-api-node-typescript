import express from "express";
import { getRole } from "../controllers/RoleController";

const route = express.Router();

route.get("/role", getRole);

export default route;
