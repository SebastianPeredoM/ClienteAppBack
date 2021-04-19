const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');
/*
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
*/

require('./helper/utils_helper');
require('./helper/constants');
/*
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cliente API',
      version: '1.0.0',
      description: 'Cliente API',
      contact: {
        name: 'Sebastian Peredo Murga',
        url: 'https://www.linkedin.com/in/anthony-sebastian-peredo-murga-bb5938149/'
      },
    },
    servers: ['http://localhost:3000/dev']
  },
  apis: ['./src/index.js']
  // apis: ['handler.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
*/
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};