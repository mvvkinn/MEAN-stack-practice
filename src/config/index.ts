import dotenv from "dotenv";
const env = dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (env.error) {
  throw new Error(`Error while loading .env :\n${env.error}`);
}

export default {
  databaseURL: process.env.MONGO_DB as string,

  port: process.env.PORT,
};
