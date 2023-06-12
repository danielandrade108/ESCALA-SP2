var express = require("express");
var router = express.Router();

var escalacaoController = require("../controllers/escalacaoController");

router.put("/cadastrarEscalacao/:idLogin", function (req, res) {
    escalacaoController.cadastrarEscalacao(req, res);
})

module.exports = router;