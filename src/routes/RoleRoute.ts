import express from "express";
import { getRole, createRole } from "../controllers/RoleController";

const route = express.Router();

route.get("/role", getRole);
route.post("/role", createRole);

export default route;
