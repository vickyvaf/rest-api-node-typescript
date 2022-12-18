const dotenv = require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB,
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
};
