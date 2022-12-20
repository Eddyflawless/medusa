import { Sequelize, Model, DataTypes } from "sequelize";

interface SequelizeOptions {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  dialect: "postgres" | "mysql";
  logging?: boolean;
}

const envParser = (env_property: string): string => {
  return process.env[env_property] || "";
};

const options: SequelizeOptions = {
  database: envParser("POSTGRES_DB"),
  host: envParser("POSTGRES_HOST"),
  port: parseInt(envParser("POSTGRES_PORT")),
  user: envParser("POSTGRES_USER"),
  password: envParser("POSTGRES_PASS"),
  dialect: "postgres",
};

const { host, port, user, password, database } = options;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: options.dialect,
});
