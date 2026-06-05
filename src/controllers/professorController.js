// Importa o model de professor
const professorModel = require("../models/professorModel");

// Listar todos os Professores
const listarProfessores = async (req, res) => {
  // busca por professores
  const professores = await professorModel.listarProfessores();
  // Retorna resposta em JSON
  res.status(200).json(professores);
};

// Buscar professor por ID
const buscarPorId = async (req, res) => {
  // Pega o ID do professor
  const { id } = req.params;
  // Busca por professor
  const professor = await professorModel.buscarPorId(id);
  // faz a verificação se existe
  if (!professor) {
    //Retorna erro caso não
    return res.status(404).json({ mensagem: "Professor não encontrado" });
  }
  // caso sim , retorna a resposta ( Professor)
  res.status(200).json(professor);
};

// criar novo professor
const criarProfessores = async (req, res) => {
  // dados (atributos)
  const { nome, disciplina, email, salario } = req.body;

  // Verificação dos campos
  if (!nome || !disciplina || !email || !salario) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios" });
  }

  //inserir o novo professor no banco
  await professorModel.criarProfessores(nome, disciplina, email, salario);

  // Retorna resposta
  res.status(201).json({ mensagem: "Professor cadastrado com sucesso" });
};

// Atualizar Professor
const atualizar = async (req, res) => {
  // id do professor há ser atualizado
  const { id } = req.params;

  // captura os dados
  const { nome, disciplina, email, salario } = req.body;

  // Verifica se todos os campos obrigatórios foram informados
  if (!nome || !disciplina || !email || !salario) {
    // Retorna erro 400 se há campos não completos
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios" });
  }

  // Verifica se o professor existe antes de atualizar (id)
  const professorExiste = await professorModel.buscarPorId(id);

  //  atualizar os dados do professor no banco
  await professorModel.atualizar(id, nome, disciplina, email, salario);

  // Retorna resposta de sucesso
  res.status(200).json({ mensagem: "Professor atualizado com sucesso" });
};

// Remove professor
const deletarProfessor = async (req, res) => {
  // Obtém o id
  const { id } = req.params;

  // Verifica se o professor existe antes de deletar do banco
  const professorExiste = await professorModel.buscarPorId(id);
  if (!professorExiste) {
    return res.status(404).json({ mensagem: "Professor não encontrado!" });
  }
  await professorModel.deletarProfessor(id);

  // Retorna resposta de sucesso
  res.status(200).json({ mensagem: "Professor removido com sucesso!" });
};

// Exporta funções
module.exports = {
  listarProfessores,
  buscarPorId,
  criarProfessores,
  atualizar,
  deletarProfessor,
};
