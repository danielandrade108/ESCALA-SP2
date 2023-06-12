var escalacaoModel = require("../models/escalacaoModel");

function cadastrarEscalacao(req, res) {
    var campo = req.body.campoServer;
    var idLogin = req.params.idLogin;

    if (campo == undefined) {
        res.status(400).send("Seu campo está undefined!");
    } else {

        escalacaoModel.cadastrarEscalacao(campo, idLogin)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarEscalacao
}