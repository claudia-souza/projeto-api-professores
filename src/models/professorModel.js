// Importa a conexão com o banco de dados
const conexao = require("../database/conexao");

// Listar professores no banco
const listarProfessores = async () => {
  // mostrar todas as linhas
  const sql = "SELECT * FROM professores";

  // Executa a query
  const [rows] = await conexao.execute(sql);

  // Retorna os professores
  return rows;
};

// Buscar professor por ID
const buscarPorId = async (id) => {
  // SQL
  const sql = "SELECT * FROM professores WHERE id = ?";

  // Executa a query com o ID
  const [rows] = await conexao.execute(sql, [id]);

  // Retorna o professor ( id informado)
  return rows[0];
};

//Inserir novo professor no Banco
const criarProfessores = async (nome, disciplina, email, salario) => {
  // Define o comando SQL de inserção com parâmetros
  const sql =
    "INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)";

  // Executa a query passando os valores do novo professor ( atributos)
  const [result] = await conexao.execute(sql, [
    nome,
    disciplina,
    email,
    salario,
  ]);

  // Retorna o resultado da inserção
  return result;
};

// Atualizar Cliente existente
const atualizar = async (id, nome, disciplina, email, salario) => {
  const sql =
    "UPDATE professores SET nome = ?, disciplina = ?, email = ?, salario = ? WHERE id = ?";

  // Executa a query passando os novos valores e o id do professor
  const [result] = await conexao.execute(sql, [
    nome,
    disciplina,
    email,
    salario,
    id,
  ]);

  // Retorna o resultado da atualização ( novos dados)
  return result;
};

// Remove professor
const deletarProfessor = async (id) => {
  // Define o comando SQL ( deletar)
  const sql = "DELETE FROM professores WHERE id = ?";

  // Executa a query passando o id do professor a ser removido
  const [result] = await conexao.execute(sql, [id]);

  // Retorna o resultado
  return result;
};

// Exporta todas as funções do model
module.exports = {
  listarProfessores,
  buscarPorId,
  criarProfessores,
  atualizar,
  deletarProfessor,
};
