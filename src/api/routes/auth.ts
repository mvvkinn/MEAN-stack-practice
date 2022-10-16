import { Router, Response, Request } from "express";

const router = Router();

export default (app: Router) => {
  app.use("/auth", router);

  router.post("/login", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });
};
