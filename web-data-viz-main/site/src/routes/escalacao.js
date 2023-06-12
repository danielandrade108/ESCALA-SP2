var express = require("express");
var router = express.Router();

var escalacaoController = require("../controllers/escalacaoController");

router.put("/cadastrarEscalacao/:idLogin", function (req, res) {
    escalacaoController.cadastrarEscalacao(req, res);
})

router.post("/puxarJogador/:idLogin", function (req, res) {
    escalacaoController.puxarJogador(req, res);
});

module.exports = router;