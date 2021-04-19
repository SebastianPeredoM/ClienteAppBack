'use strict';

const m_cliente = require('./m_cliente');

async function crearCliente(req, res) {
    try {
        let { nombre,
              apellido,
              fecha_nacimiento
            } = req.body;
        
        global.__isNullOrEmpty(nombre, 'Por favor, ingresa el nombre.');
        global.__isNullOrEmpty(apellido, 'Por favor, ingresa el apellido.');
        global.__isNullOrEmpty(fecha_nacimiento, 'Por favor, ingresa la fecha de nacimiento.');

        global.__maxLength(nombre, 55, 'El nombre no puede tener más de 55 letras.');
        global.__maxLength(apellido, 55, 'El apellido no puede tener más de 55 letras.');

        global.__dateInvalid(fecha_nacimiento, 'La fecha de nacimiento es inválida.');
        global.__maxDaysFromDate(fecha_nacimiento, 0, 'La fecha de nacimiento no puede ser futura.');
        global.__minYearsFromDate(fecha_nacimiento, 100, 'No podemos registrar clientes con más de 100 años.');
        
        let result = await m_cliente.crearCliente(nombre, apellido, fecha_nacimiento);
        
        return res.status(global.HTTP_200).send(result);
    } catch (error) {
        return global.responseError(error, res);
    }
}

async function listarClientes(req, res) {
    try {
        let result = await m_cliente.listarClientes();

        return res.status(global.HTTP_200).send(result);
    } catch (error) {
        return global.responseError(error, res);
    }
}

async function kpiClientes(req, res) {
    try {
        let result = await m_cliente.kpiClientes();
        
        return res.status(global.HTTP_200).send(result);
    } catch (error) {
        console.log('catch: ', error);
        return global.responseError(error, res);
    }
}

module.exports = {
    crearCliente,
    listarClientes,
    kpiClientes
};