import { Request, Response } from "express";
import Role from "../db/models/Role";

const getRole = async (_: any, res: Response): Promise<Response> => {
  try {
    const result = await Role.findAll({
      where: { active: true },
    });

    return res.status(200).send({
      status: 200,
      role: result,
    });
  } catch (error: any) {
    if (error !== null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        error: error,
      });
    }
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

const getRoleById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await Role.findByPk(id);

    if (!result) {
      return res.status(404).json({
        status: 404,
        message: "Data not found",
      });
    }

    return res.status(200).json({
      status: 200,
      role: result,
    });
  } catch (error: any) {
    if (error !== null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        error: error,
      });
    }
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

const createRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { roleName, active } = req.body;
    const result = await Role.create({
      roleName: roleName,
      active: active,
    });

    return res.status(200).send({
      status: 200,
      message: "created",
      role: result,
    });
  } catch (error: any) {
    if (error !== null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        error: error,
      });
    }
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

export { getRole, getRoleById, createRole };
