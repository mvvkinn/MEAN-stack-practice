import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import { Application } from "express";

export default async ({ expressApp }: { expressApp: Application }) => {
  const dbConnection = await mongooseLoader();

  await expressLoader({ app: expressApp });
};
