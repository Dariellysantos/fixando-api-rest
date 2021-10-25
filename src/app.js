const express = require("express");
const app = express();
const cors = require("cors");

const filmesRouter = require("./routes/filmesRoutes");
const serieRouter = require("./routes/seriesRoutes");

app.use(express.json());

app.use("/filmes", filmesRouter);
app.use("/serie", serieRouter);

app.use(cors());
module.exports = app;
