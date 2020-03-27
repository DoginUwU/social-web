const knex = require('knex');
const configs = require('../../knexfile');

const conn = knex(configs.development);

module.exports = conn;