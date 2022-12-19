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

    return res.status(201).send({
      status: 201,
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

const updateRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { roleName, active } = req.body;
    const checkId = await Role.findByPk(id);

    if (!checkId) {
      return res.status(404).json({
        status: 404,
        message: "Data not found",
      });
    }

    const values = {
      roleName,
      active,
    };
    const selector = {
      where: {
        id: id,
      },
    };
    const updateStatus = await Role.update(values, selector);
    const updateRole = await Role.findByPk(id);

    return res.status(200).json({
      status: 200,
      message: "Updated",
      updateStatus: updateStatus,
      role: updateRole,
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

const deleteRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await Role.findByPk(id);

    if (!result) {
      return res.status(404).json({
        status: 404,
        message: "Data not found",
      });
    }

    await Role.destroy({ where: { id: id } });

    return res.status(200).json({
      status: 200,
      message: "Deleted",
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

export { getRole, getRoleById, createRole, updateRole, deleteRole };
