const express = require("express");
const router = express.Router();

const Inadimplente = require("../models/Inadimplente");

// Retorna um array com todos os inadimplentes
router.get("/inadimplentes", (req, res) => {
  Inadimplente.find()
    .then((inadimplentes) => {
      res.json(inadimplentes);
    })
    .catch((error) => res.status(500).json(error));
});

// Inserindo novo cliente inadimplente ao banco de dadoas
router.post("/inadimplente", (req, res) => {
  const novoInadimplente = new Inadimplente({
    nome: req.body.nome,
    valor: req.body.valor,
  });

  novoInadimplente
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// Atualizando dados de um carro já existente
router.put("/inadimplente/edit/:id", (req, res) => {
  const novosDados = { nome: req.body.nome, valor: req.body.valor };

  Inadimplente.findOneAndUpdate({ _id: req.params.id }, novosDados, {
    new: true,
  })
    .then((inadimplente) => {
      res.json(inadimplente);
    })
    .catch((error) => res.status(500).json(error));
});

// Deletando um carro do banco de dados
router.delete("/inadimplente/delete/:id", (req, res) => {
  Inadimplente.findOneAndDelete({ _id: req.params.id })
    .then((inadimplente) => {
      res.json(inadimplente);
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
