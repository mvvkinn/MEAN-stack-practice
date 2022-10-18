import express from "express";
import loader from "@/loader";
import config from "@/config";

async function startServer() {
  const app = express();

  await loader({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
  });
}

startServer();
