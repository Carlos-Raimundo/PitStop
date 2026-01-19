require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');
const app = express();
app.use(bodyParser.json());
app.use('/api', routes);
const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
    console.log('Conectado ao MySQL');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('Não foi possível conectar:', err.message);
});