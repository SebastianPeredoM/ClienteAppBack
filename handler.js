const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');
require('./db/conexionBD');

require('./helper/utils_helper');
require('./helper/constants');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};