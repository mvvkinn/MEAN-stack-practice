import { Router, Request, Response } from "express";

const router = Router();

export default (app: Router) => {
  app.use("/test", router);

  router.get("", (req: Request, res: Response) => {
    res.send("OK");
  });
};
