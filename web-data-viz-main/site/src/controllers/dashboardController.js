var dashboardModel = require("../models/dashboardModel");

function grafico1(req, res) {

    dashboardModel.grafico1()
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length > 0) {
                    console.log(resultadoAutenticar);
                    res.status(200).json(resultadoAutenticar);
                } else {
                    res.status(403).send("Não veio nada");
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

function grafico2(req, res) {

    dashboardModel.grafico2()
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length > 0) {
                    console.log(resultadoAutenticar);
                    res.status(200).json(resultadoAutenticar);
                } else {
                    res.status(403).send("Não veio nada");
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

function updJogadorPref(req, res) {
    var jogador = req.body.jogadorServer;
    var idLogin = req.params.idLogin;

    if (jogador == undefined) {
        res.status(400).send("Seu campo está undefined!");
    } else {

        dashboardModel.updJogadorPref(jogador, idLogin)
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
    grafico1,
    grafico2,
    updJogadorPref
}