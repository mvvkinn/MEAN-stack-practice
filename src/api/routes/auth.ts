import { Router, Response, Request } from "express";
import mongoose from "mongoose";
import { InterfaceUser } from "@/interfaces/user";
import userModel from "@/models/user";

const router = Router();

export default (app: Router) => {
  app.use("/auth", router);

  router.post("/signin", (req: Request, res: Response) => {
    userModel.find(req.body, (err: Error, data: object) => {
      if (err) throw new Error(err.message);
      res.send(data);
    });
  });

  router.post("/signup", (req: Request, res: Response) => {
    userModel.create(req.body, (err: Error, data: object) => {
      if (err) throw new Error(err.message);
    });

    res.redirect("/");
  });
};
