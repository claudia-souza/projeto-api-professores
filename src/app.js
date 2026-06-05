// Import ( framework Express )
const express = require("express");

// Nova aplicação
const app = express();

// Import Routes
const professorRoutes = require("./routes/professorRoutes");

// Configura o middleware para receber o JSON
app.use(express.json());

// Rotas
app.use("/professores", professorRoutes);

// Exporta a aplicação
module.exports = app;
