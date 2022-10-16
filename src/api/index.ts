import { Router } from "express";
import test from "./routes/test";
import index_view from "./routes/index_view";
import auth from "./routes/auth";

export default () => {
  const app = Router();

  test(app);
  index_view(app);
  auth(app);

  return app;
};
