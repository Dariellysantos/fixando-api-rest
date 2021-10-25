const controller = require("../controller/seriesContoller");

const express = require("express");

const { Router } = require("express");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/title", controller.getByTitle);
router.post("/criar", controller.createSerie);
router.put("/update/:id", controller.update);
router.patch("/updateTitle/:id", controller.updateTitle);
router.patch("/update/:id", controller.updateSerieBody);
router.delete("/delete/:id", controller.deleteSerie);

module.exports = router;
