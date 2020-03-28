const knex = require('knex');
const configs = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configs.test : configs.development;

const conn = knex(config);

module.exports = conn;