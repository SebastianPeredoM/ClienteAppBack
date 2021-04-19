const express = require('express');
const cors = require('cors');

const cliente_routes = require('./cliente/r_cliente')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/cliente', cliente_routes);

module.exports = app;