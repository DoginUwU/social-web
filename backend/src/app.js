const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
    Metódo HTTP
    GET: Buscar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Parametros
    Query Params: Parâmetros nomeados enviados na rota após o simbolo de ?, geralmente servem para filtros, paginações
    Route Params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requesição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Miscrosoft SQL Server
    NoSQL: MongoDB, CouchDB
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/

module.exports = app;

