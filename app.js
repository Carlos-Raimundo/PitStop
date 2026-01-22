//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');
const app = express();
app.use(bodyParser.json());
app.use('/api', routes);
const PORT = process.env.PORT || 3000;

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);


sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Erro ao conectar no banco:', error.message);
    console.error(error);
    process.exit(1);
  });
