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

module.exports = {
  getAll,
  getById,
};
