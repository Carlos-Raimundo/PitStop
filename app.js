//require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');
const app = express();

// CORS: permite o frontend conectar (ajuste origins em produção)
app.use(cors({
  origin: process.env.FRONTEND_URL || true, // true = qualquer origem em dev
  credentials: true
}));
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

  // 0.0.0.0 = aceita conexões de emulador e dispositivo na rede
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('React Native: use http://10.0.2.2:' + PORT + ' (Android emulator) ou http://SEU_IP:' + PORT + ' (dispositivo físico)');
  });
