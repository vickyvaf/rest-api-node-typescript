import { Request, Response, NextFunction } from "express";
import { extractToken } from "../helpers/GenerateToken";
import responseData from "../helpers/Helper";

const authenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authToken = req.headers["authorization"];
    const token = authToken && authToken?.split(" ")[1];

    if (token === null) {
      return res
        .status(401)
        .send(responseData(401, "Unauthorized", null, null));
    }

    extractToken(token!);
    next();
  } catch (error: any) {
    return res.status(500).send(responseData(500, "", error, null));
  }
};

export default authenticated;
