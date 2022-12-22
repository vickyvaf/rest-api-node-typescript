import express from "express";
import {
  getRole,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/RoleController";
import authenticated from "../middlewares/Authorization";

const route = express.Router();

route.get("/role", authenticated, getRole);
route.get("/role/:id", getRoleById);
route.post("/role", createRole);
route.put("/role/:id", updateRole);
route.delete("/role/:id", deleteRole);

export default route;
