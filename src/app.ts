import express from "express";
import routes from "./api";

const app = express();
const port = process.env.PORT ? 80 : 3000;

app.get("/status", (req, res) => {
  res.status(200).end();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "public"));

app.use(routes());

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
