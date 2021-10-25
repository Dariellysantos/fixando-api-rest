const controller = require("../controller/seriesContoller");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/title", controller.getByTitle);

module.exports = router;
