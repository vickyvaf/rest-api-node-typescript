import express from "express";
import {
  getRole,
  getRoleById,
  createRole,
} from "../controllers/RoleController";

const route = express.Router();

route.get("/role", getRole);
route.get("/role/:id", getRoleById);
route.post("/role", createRole);

export default route;
