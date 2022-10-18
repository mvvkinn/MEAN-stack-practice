import { Router, Request, Response } from "express";

const router = Router();

export default (app: Router) => {
  app.use(router);

  router.get("", (req: Request, res: Response) => {
    res.render("index.ejs");
  });

  router.get("/signupPage", (req: Request, res: Response) => {
    res.render("signup.ejs");
  });

  router.get("/success", (req, res) => {
    res.send("OK");
  });
};
