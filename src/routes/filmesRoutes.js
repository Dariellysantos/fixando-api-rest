const controller = require("../controller/filmesController");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/list", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/titulo", controller.getByTitle);

module.exports = router;
