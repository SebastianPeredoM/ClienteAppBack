'use strict';

const db = require('../../db/conexionBD');

async function crearCliente(nombre, apellido, fecha_nacimiento) {
    try {
        const values = [nombre, apellido, fecha_nacimiento];
        const sql = `SELECT * FROM __cliente_01__crear_cliente($1, $2, $3) AS result;`;
        let res = await db.one(sql, values);

        res = res.result;
        if (res.status == global.STATUS_ERROR || res.status == global.STATUS_ERROR_DB_OTHERS) {
            throw res;
        }
        return res;
    } catch (error) {
        error.msj = new Error().stack;
        throw error;
    }
}

async function listarClientes() {
    try {
        console.log(db)
        const sql = `SELECT * FROM __cliente_02__listar_clientes() AS result;`;
        let res = await db.result(sql);
        
        return res.rows;
    } catch (error) {
        error.msj = new Error().stack;
        throw error;
    }
}

async function kpiClientes() {
    try {
        const sql = `SELECT * FROM __cliente_03__calcular_kpi_clientes() AS result;`;
        let res = await db.one(sql);
        
        res = res.result;
        if (res.status == global.STATUS_ERROR || res.status == global.STATUS_ERROR_DB_OTHERS) {
            throw res;
        }
        return res;
    } catch (error) {
        error.msj = new Error().stack;
        throw error;
    }
}

module.exports = {
    crearCliente,
    listarClientes,
    kpiClientes
};