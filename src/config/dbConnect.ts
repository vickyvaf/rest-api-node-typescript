import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST;
const dialect = process.env.DB as any;

const sequelizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dialect,
});

export = { sequelizeConnection };
