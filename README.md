# 📚 API REST - Sistema de Cadastro de Professores
Avaliação Prática — Desenvolvimento de 
API REST MVC com Node.js, Express e 
MySQL

## Disciplina 
Desenvolvimento Web / Back-end

##  Aluna
- Cláudia Ferreira

## Professor 
- Evandro de Lima


## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- MySQL
- Arquitetura MVC
- Async/Await

## 📁 Estrutura do Projeto
```plaintext
projeto-api-professores/
├── src/
│   ├── controllers/
│   │   └── professorController.js
│   ├── database/
│   │   └── conexao.js
│   ├── models/
│   │   └── professorModel.js
│   ├── routes/
│   │   └── professorRoutes.js
│   └── app.js
├── server.js
├── package.json
└── database.sql
```
routes  : rotas da API ;
controllers : regras das requisições ;
models : acesso ao banco ;
database : conexão com MySQL .

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MySQL instalado

### Passo a passo

1. Clone o repositório:
```bash
git clonehttps://github.com/claudia-souza/projeto-api-professores.git
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o banco de dados rodando o arquivo `database.sql` no MySQL Workbench.

4. Configure a conexão em `src/database/conexao.js` com *seu usuário* e *senha do MySQL*.

5. Instalar as dependências

```bash
npm install
```
6. Instalar pacotes necessários

```bash
npm install express mysql2 nodemon
```
---

7. Inicie o servidor:
```bash
npm run dev
```
8. Execute a Aplicação
```bash
node server.js                     
```


