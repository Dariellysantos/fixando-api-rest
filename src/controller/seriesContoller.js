const { json } = require("express");
const models = require("../models/series.json");

const getAll = (req, res) => {
  res.status(200).json([
    {
      serie: models,
    },
  ]);
};

const getById = (req, res) => {
  const idSerie = req.params.id;
  let found = models.find((models) => models.id == idSerie);

  if (found == undefined) {
    res.status(400).send({ Error: "Id não encontrado" });
  }

  res.status(200).json(found);
};

const getByTitle = (req, res) => {
  const titleSerie = req.query.title;
  let foundSerie = models.filter((serie) => serie.title.includes(titleSerie));

  if (!foundSerie) {
    res.status(400).send({ Error: " Titulo não encontrado" });
  }
  if (foundSerie.length == 0) {
    res.status(400).send({ Error: " Titulo não encontrado" });
  }

  res.status(200).json(foundSerie);
};

const createSerie = (req, res) => {
  let bodyRequest = req.body;
  let newSerie = {
    id: models.length + 1,
    title: bodyRequest.title,
    totalSeasons: bodyRequest.totalSeasons,
  };

  models.push(newSerie);
  res.status(201).json([
    {
      mensagem: "Serie cadastrado com sucesso",
      newSerie: newSerie,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  getByTitle,
  createSerie,
};
