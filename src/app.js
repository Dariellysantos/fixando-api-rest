const express = require("express");
const app = express();
const cors = require("cors");

const filmesRouter = require("./routes/filmesRoutes");

app.use(express.json());

app.use("/filmes", filmesRouter);

app.use(cors());
module.exports = app;
