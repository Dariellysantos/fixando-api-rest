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
module.exports = {
  getAll,
  getById,
  getByTitle,
};
