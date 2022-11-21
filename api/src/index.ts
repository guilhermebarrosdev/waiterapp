import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const PORT = 3390;

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*"); //* = WILDCARD('carta coringa')
      res.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log("=================================================");
      console.log(`| 🚀 Servidor rodando em: http://localhost:${PORT} |`);
      console.log("=================================================");
    });
  })
  .catch(() => console.log("Erro ao conectar no MongoDB"));
