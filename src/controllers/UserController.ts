import { Request, Response } from "express";
import responseData from "../helpers/Helper";
import User from "../db/models/User";

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      active: true,
      verified: true,
      roleId: 1,
    });

    return res.status(201).send(responseData(201, "created", null, user));
  } catch (error: any) {
    return res.status(500).send(responseData(500, "", error, null));
  }
};

export { register };
