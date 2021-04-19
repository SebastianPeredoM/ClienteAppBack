'use strict';

const m_cliente = require('./m_cliente');

async function crearCliente(req, res) {
    try {
        console.log('111')
        let { nombre,
              apellido,
              fecha_nacimiento
            } = req.body;
        console.log('222')
        global.__isNullOrEmpty([nombre, apellido, fecha_nacimiento], 'Faltan datos requeridos.');

        global.__maxLength(nombre, 55, 'El nombre no puede tener más de 55 letras.');
        global.__maxLength(apellido, 55, 'El apellido no puede tener más de 55 letras.');

        global.__dateInvalid(fecha_nacimiento, 'La fecha de nacimiento es inválida.');
        global.__maxDaysFromDate(fecha_nacimiento, 0, 'La fecha de nacimiento no puede ser futura.');
        global.__minYearsFromDate(fecha_nacimiento, 100, 'No podemos registrar clientes con más de 100 años.');
        
        console.log('333')

        let result = await m_cliente.crearCliente(nombre, apellido, fecha_nacimiento);
        
        console.log('4444')
        
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