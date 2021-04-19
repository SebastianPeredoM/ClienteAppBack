const express    = require('express'),
      controller = require('./c_cliente'),
      routes     = express.Router();

routes.post('/crearcliente', controller.crearCliente)
      .get('/listclientes' , controller.listarClientes)
      .get('/kpideclientes' , controller.kpiClientes);

module.exports = routes;