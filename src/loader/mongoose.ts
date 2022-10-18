import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "@/config";

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURL);

  if (connection.MongooseError) {
    throw new Error(connection.MongooseError.messages);
  }

  return connection.connection.db;
};
