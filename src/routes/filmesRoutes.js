const controller = require("../controller/filmesController");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/list", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/title", controller.getByTitle);
router.post("/criar", controller.createMovie);
router.patch("/updateTitle/:id", controller.updateTitle);
router.put("/update/:id", controller.update);
router.patch("/update/:id", controller.updateMovieBody);
router.delete("/delete/:id", controller.deleteMovie);

module.exports = router;
