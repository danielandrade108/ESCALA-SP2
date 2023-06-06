var express = require("express");
var router = express.Router();

var escalacaoController = require("../controllers/escalacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEscalacao", function (req, res) {
    escalacaoController.cadastrarEscalacao(req, res);
})