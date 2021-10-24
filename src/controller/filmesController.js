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

const updateTitle = (req, res) => {
  const idRequest = req.params.id;
  let newTitle = req.body.Title;

  movieFound = models.find((movie) => movie.id == idRequest);
  console.log(newTitle);
  movieFound.Title = newTitle;
  console.log(movieFound);
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
};
