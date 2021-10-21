const controller = require("../controller/filmesController");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/list", controller.getAll);

module.exports = router;
