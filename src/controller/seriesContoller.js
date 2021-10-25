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

const update = (req, res) => {
  const idRequestSerie = req.params.id;
  let newUpdate = req.body;

  newUpdateFound = models.find((serie) => serie.id == idRequestSerie);

  let newUpdateId = {
    id: idRequestSerie,
    ...newUpdate,
  };

  models.push(newUpdateId);
  res.status(200).json([
    {
      mensagem: " Informações do id atualizadas",
      newUpdateId,
    },
  ]);
};

const updateTitle = (req, res) => {
  const idRequest = req.params.id;
  let newTitle = req.body.title;

  serieFound = models.find((serie) => serie.id == idRequest);
  serieFound.title = newTitle;
  res.status(200).json([
    {
      mensagem: "serie atualizado com sucesso",
      serieFound,
    },
  ]);
};

const updateSerieBody = (req, res) => {
  const idRequestBody = req.params.id;
  let bodyRequestSerie = req.body;
  serieFound = models.find((serie) => serie.id == idRequestBody);

  let newSerieBody = {
    id: idRequestBody,
    title: bodyRequestSerie.title,
    totalSeasons: bodyRequestSerie.totalSeasons,
    genre: [bodyRequestSerie.genre],
    writers: [bodyRequestSerie.writers],
    poster: bodyRequestSerie.poster,
    actors: [bodyRequestSerie.actors],
    ratings: {
      rating: bodyRequestSerie.rating,
      likes: bodyRequestSerie.likes,
    },
  };

  models.push(newSerieBody);
  res.status(201).json([
    {
      mensagem: "Filme Atualizado com sucesso",
      newSerieBody,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  getByTitle,
  createSerie,
  update,
  updateTitle,
  updateSerieBody,
};
