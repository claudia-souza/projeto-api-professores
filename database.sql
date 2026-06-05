-- Cria um novo banco de dados de acordo com a aplicação ( ESCOLA)
CREATE DATABASE escola;
USE escola;

-- Criação da Tabela , atributos ( ID auto incremental, nome,disciplina,email, salario)
CREATE TABLE professores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  disciplina VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  salario DECIMAL(10,2) NOT NULL
);

/* 
  -- Exemplo de Criação e inserção em meu computador
CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  disciplina VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  salario DECIMAL(10,2) NOT NULL
);
SELECT*from professores;

-- Inserindo os valores iniciais 
INSERT INTO professores (nome, disciplina, email, salario) 
VALUES ('Evandro', 'Dev. WEB', 'evandro@exemplo.com', 0000.00),
	   ('Raquel', 'topicos em IA', 'raquel@exemplo.com', 0000.00),
	   ('Claudia ', 'Teste', 'claudia@exemplo.com', 0000.00),
	   ('Teste', 'topicos em IA', 'teste@exemplo.com', 0000.00);
	
SELECT*from professores;

*/
