import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (data: any) => {
  const token = jwt.sign(data, process.env.JWT_TOKEN as string, {
    expiresIn: "10m",
  });

  return token;
};

export { generateToken };
