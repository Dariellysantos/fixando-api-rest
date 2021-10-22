const models = require("../models/filmes.json");

const getAll = (req, res) => {
  res.status(200).json([
    {
      filmes: models,
    },
  ]);
};

const getById = (req, res) => {
  const idMovie = req.params.id;
  let found = models.find((models) => models.id == idMovie);

  if (found == undefined) {
    res.status(400).send({ Error: "Id não encontrado" });
  }

  res.status(200).json(found);
};

const getByTitle = (req, res) => {
  const titleMovie = req.query.titulo;
  let foundMovie = models.filter((filmes) => filmes.Title.includes(titleMovie));

  res.status(200).json(foundMovie);
};
module.exports = {
  getAll,
  getById,
  getByTitle,
};
