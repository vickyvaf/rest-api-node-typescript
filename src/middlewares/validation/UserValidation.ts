import { Request, Response, NextFunction } from "express";
import Validator from "validatorjs";
import responseData from "../../helpers/Helper";
import User from "../../db/models/User";

const registerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    let rules = {
      name: "required|string|max:50",
      email: "required|email",
      password: "required|min:8",
      confirmPassword: "required|same:password",
    };
    let validation = new Validator(data, rules);

    if (validation.fails()) {
      return res
        .status(400)
        .send(responseData(400, "Bad Request", validation.errors.errors, null));
    }

    const checkEmailDuplicate = await User.findOne({
      where: { email: data.email },
    });

    if (checkEmailDuplicate) {
      const response = {
        email: ["email has been used"],
      };

      return res
        .status(400)
        .send(responseData(400, "Bad Request", response, null));
    }

    next();
  } catch (error: any) {
    return res.status(500).send(responseData(500, "", error, null));
  }
};

export { registerValidation };
