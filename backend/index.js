const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

// Adicionando arquivo de rota no endpoint /carros
const inadimplentes = require("./routes/inadimplentes");

app.use("/api/clientes", inadimplentes);

mongoose
  .connect("mongodb://db:27017/crud-node-mongo-docker", {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("MongoDB Conectado");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(9000, () => console.log("Server ativo na porta 9000"));
