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

export { getRole };
