var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/grafico1", function (req, res) {
    dashboardController.grafico1(req, res);
})

router.get("/grafico2", function (req, res) {
    dashboardController.grafico2(req, res);
})

router.put("/updJogadorPref/:idLogin", function (req, res) {
    dashboardController.updJogadorPref(req, res);
})

module.exports = router;