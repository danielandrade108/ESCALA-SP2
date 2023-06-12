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

function puxarJogador(req, res) {
    var idLogin = req.params.idLogin;
    
        escalacaoModel.puxarJogador(idLogin)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não conseguiu buscar jogador.");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }




module.exports = {
    cadastrarEscalacao,
    puxarJogador
}