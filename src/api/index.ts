import { Router } from "express";
import test from "./routes/test";
import views from "./routes/views";
import auth from "./routes/auth";

export default () => {
  const app = Router();

  test(app);
  views(app);
  auth(app);

  return app;
};
