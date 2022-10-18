import express from "express";
import morgan from "morgan";
import routes from "@/api";

export default ({ app }: { app: express.Application }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set("views", __dirname + "/../views");
  app.use(express.static(__dirname + "public"));

  app.use(routes());
};
