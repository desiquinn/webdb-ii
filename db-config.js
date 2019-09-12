const knex = require('knex');

const knexfile = require('./knexfile.js');

const config= knex(knexfile.development)

module.exports = config;