var database = require("../database/config")

function cadastrarEscalacao(campo, idLogin) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", campo, idLogin)
    var instrucao = `
    UPDATE Usuario SET fkFormacao = ${campo} where idUsuario = ${idLogin};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarEscalacao
};
