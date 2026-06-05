// Importa express
const { Router } = require("express");

// Importa o controller de professores
const professorController = require("../controllers/professorController");

// Cria uma instância do Router
const router = Router();

// Listar professores
router.get("/", professorController.listarProfessores);

// Busca Professor por ID
router.get("/:id", professorController.buscarPorId);
// Cria novo professor
router.post("/", professorController.criarProfessores);

// Atualiza dados professor
router.put("/:id", professorController.atualizar);

// Remove professor
router.delete("/:id", professorController.deletarProfessor);

// Exporta o router
module.exports = router;
