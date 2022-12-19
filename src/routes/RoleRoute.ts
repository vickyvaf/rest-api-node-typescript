import express from "express";
import {
  getRole,
  getRoleById,
  createRole,
  deleteRole,
} from "../controllers/RoleController";

const route = express.Router();

route.get("/role", getRole);
route.get("/role/:id", getRoleById);
route.post("/role", createRole);
route.delete("/role/:id", deleteRole);

export default route;
