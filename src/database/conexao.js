// Importa o módulo mysql2 Promises
const mysql = require("mysql2/promise");

// Cria o pool de conexões
const conexao = mysql.createPool({
  host: "localhost", // 127.0.0.1   // Endereço do banco
  user: "root", // Usuário do banco de dados
  password: "1234", // Senha do banco de dados ( local host)
  database: "escola", // Nome do banco de dados
});

// Exporta a conexão
module.exports = conexao;
