const { json } = require("express");
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
  const titleMovie = req.query.title.toLowerCase();
  let foundMovie = models.filter((movie) =>
    movie.Title.toLowerCase().includes(titleMovie.toLowerCase())
  );

  if (!foundMovie) {
    res.status(400).send({ Error: " Titulo não encontrado" });
  }
  if (foundMovie.length == 0) {
    res.status(400).send({ Error: " Titulo não encontrado" });
  }

  res.status(200).json(foundMovie);
};

const createMovie = (req, res) => {
  let bodyRequest = req.body;
  let newMovie = {
    id: models.length + 1,
    Title: bodyRequest.Title,
    Plot: bodyRequest.Plot,
  };

  models.push(newMovie);
  res.status(201).json([
    {
      mensagem: "Filme cadastrado com sucesso",
      newMovie,
    },
  ]);
};

const update = (req, res) => {
  const idRequestMovie = req.params.id;
  let newUpdate = req.body;

  newUpdateFound = models.find((movie) => (movie.id = idRequestMovie));
  let newUpdateId = {
    id: idRequestMovie,
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
  let newTitle = req.body.Title;

  movieFound = models.find((movie) => movie.id == idRequest);
  movieFound.Title = newTitle;
  res.status(200).json([
    {
      mensagem: "filme atualizado com sucesso",
      movieFound,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  getByTitle,
  createMovie,
  updateTitle,
  update,
};
