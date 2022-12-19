import express from "express";
import {
  getRole,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/RoleController";

const route = express.Router();

route.get("/role", getRole);
route.get("/role/:id", getRoleById);
route.post("/role", createRole);
route.put("/role/:id", updateRole);
route.delete("/role/:id", deleteRole);

export default route;
