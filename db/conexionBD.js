const pgp = require('pg-promise')();
const dbParams = require('./database.json');

const db = pgp(dbParams);
module.exports = db;