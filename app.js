require('./helper/utils_helper');
require('./helper/constants');

const serverless = require('serverless-http');
const app = require('./src/index');

app.get('/', (req, res) => {
  res.send('Empezamos!')
})

module.exports.handler = serverless(app);