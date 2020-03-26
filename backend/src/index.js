const express = require('express'); // importa as funcionalidades do modulo chamado express que foi instalado

const cors = require('cors'); // importação do módulo de segurança

// importar o arquivo de rotas do routes.js
const routes = require('./routes'); // usar ./ para determinar que é um arquivo - ./ referencia a mesma pasta do arquivo index.js

const app = express(); // variavel que vai armazenar a aplicação

app.use(cors()); // módulo de segurança do app

app.use(express.json()); // determina que a requisição será no padrão json

app.use(routes); // já reconhece as rotas

/* rota e recurso */
/* 
    tipos de métodos

    get: buscar/listar informação no back-end - busca informação como localhost:3333/contatos
    post: cria informação no beck-end - exemplo cadastrar um usuário
    put: alterar uma informação no back-end
    delete: deletar uma informação no back-end
*/

/*
    tipos de parâmetros

    Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos - exemplo http://localhost:3333/users/1 = id do usuário depois da rota
    request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    Tipos de Banco de Dados

    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Lite
    NoSQL: MongoDB

    Utilizaremos o SQLite
*/

/*
    opções de configurar a integração da linguagem 

    Driver: Select * from users

    independe do banco de dados - scripts
    Query Builder: table('users').select('*').where()
    baixar no site knex.js
*/

app.listen(3333); // a aplicação vai ouvir a porta 3333 - no browse - localhost:3333


