require('dotenv').config();
const path = require("path");

const {
    DATABASE_URL = "postgresql://postgres@localhost/postgres",
    DATABASE_URL_DEVELOPMENT = "postgresql://postgres@localhost/postgres",
    DATABASE_URL_TEST = "postgresql://postgres@localhost/postgres",
    DEBUG,    
} = process.env;

module.exports = {
    development: {
      client: "postgresql",
      pool: { min: 1, max: 5 },
      connection: DATABASE_URL_DEVELOPMENT,
      migrations: {
        directory: path.join(__dirname, "db", "migrations"),
      },
      seeds: {
        directory: path.join(__dirname, "db", "seeds"),
      },
      debug: !!DEBUG,
    },
    test: {
      client: "postgresql",
      pool: { min: 1, max: 5 },
      connection: DATABASE_URL_TEST,
      migrations: {
        directory: path.join(__dirname, "db", "migrations"),
      },
      seeds: {
        directory: path.join(__dirname, "db", "seeds"),
      },
      debug: !!DEBUG,
    },
    production: {
      client: "postgresql",
      pool: { min: 1, max: 5 },
      connection: DATABASE_URL,
      migrations: {
        directory: path.join(__dirname, "db", "migrations"),
      },
      seeds: {
        directory: path.join(__dirname, "db", "seeds"),
      },
      debug: !!DEBUG,
    },
};
