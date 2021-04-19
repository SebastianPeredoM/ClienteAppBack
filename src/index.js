const express = require('express');
const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const cliente_routes = require('./cliente/r_cliente')

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'ClienteApp API',
            version: '1.0.0'
        }
    },
    apis: ['./src/cliente/c_cliente.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/cliente', cliente_routes);
app.use('/api-docs', swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerDocs));

module.exports = app;