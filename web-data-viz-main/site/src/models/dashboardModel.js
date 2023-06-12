var database = require("../database/config")

function grafico1() {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var comando = 'select (select count(fkFormacao) from Usuario where fkFormacao = 1) form1, (select count(fkFormacao) from Usuario where fkFormacao = 2) form2, (select count(fkFormacao) from Usuario where fkFormacao = 3) form3;'
    return database.executar(comando);
}

function grafico2() {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var comando = 'SELECT count(*) qtdJogador, jogadorPref nomeJogador FROM Usuario GROUP BY jogadorPref;'
    return database.executar(comando);
}

function updJogadorPref(jogador, idLogin) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", jogador, idLogin)
    var instrucao = `
    UPDATE Usuario SET jogadorPref = '${jogador}' where idUsuario = ${idLogin};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico1,
    grafico2,
    updJogadorPref
};