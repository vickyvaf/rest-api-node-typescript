import { Request, Response } from "express";
import { passwordHashing, passwordCompare } from "../helpers/PasswordHelper";
import { generateToken } from "../helpers/GenerateToken";
import responseData from "../helpers/Helper";
import User from "../db/models/User";

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const hashedPassword = await passwordHashing(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      active: true,
      verified: true,
      roleId: 1,
    });

    return res.status(201).send(responseData(201, "created", null, user));
  } catch (error: any) {
    return res.status(500).send(responseData(500, "", error, null));
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res
        .status(401)
        .send(responseData(401, "Unauthorized", null, null));
    }

    const matched = await passwordCompare(password, user.password);
    if (!matched) {
      return res
        .status(401)
        .send(responseData(401, "Unauthorized", null, null));
    }

    const dataUser = {
      name: user.name,
      email: user.email,
      roleId: user.roleId,
      active: user.active,
      verified: user.verified,
    };
    const token = generateToken(dataUser);

    const responseUser = {
      name: user.name,
      email: user.email,
      roleId: user.roleId,
      active: user.active,
      verified: user.verified,
      token: token
    }

    return res.status(200).send(responseData(200, "OK", null, responseUser));
  } catch (error: any) {
    return res.status(500).send(responseData(500, "", error, null));
  }
};

export { register, login };
