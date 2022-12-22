import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface UserData {
  name: string | null;
  email: string | null;
  roleId: string | null;
  verified: boolean | null;
  active: boolean | null;
}

const generateToken = (data: any) => {
  const token = jwt.sign(data, process.env.JWT_TOKEN as string, {
    expiresIn: "10m",
  });

  return token;
};

const generateRefreshToken = (data: any) => {
  const token = jwt.sign(data, process.env.JWT_REFRESH_TOKEN as string, {
    expiresIn: "1d",
  });

  return token;
};

const extractToken = (token: string): UserData | null => {
  const secretKey: string = process.env.JWT_TOKEN as string;

  let responseData: any;

  const res = jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      responseData = null;
    } else {
      responseData = decoded;
    }
  });

  if (responseData) {
    const result: UserData = <UserData>responseData;
    return result;
  }

  return null;
};

const extractRefreshToken = (token: string): UserData | null => {
  const secretKey: string = process.env.JWT_REFRESH_TOKEN as string;

  let responseData: any;

  const res = jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      responseData = null;
    } else {
      responseData = decoded;
    }
  });

  if (responseData) {
    const result: UserData = <UserData>responseData;
    return result;
  }

  return null;
};

export {
  generateToken,
  generateRefreshToken,
  extractToken,
  extractRefreshToken,
};
