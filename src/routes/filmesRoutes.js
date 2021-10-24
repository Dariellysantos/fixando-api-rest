const controller = require("../controller/filmesController");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/list", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/title", controller.getByTitle);
router.patch("/updateTitle/:id", controller.updateTitle);
router.put("/update/:id", controller.update);
router.post("/criar", controller.createMovie);

module.exports = router;
