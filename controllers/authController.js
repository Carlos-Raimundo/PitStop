const jwt = require('jsonwebtoken');
const { Cliente } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const { nome, email, password, telefone } = req.body;

      const user = await Cliente.create({ nome, email, password, telefone });

      return res.status(201).json({
        id: user.id,
        email: user.email
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await Cliente.findOne({ where: { email } });
      if (!user)
        return res.status(401).json({ error: 'Credenciais inválidas' });

      const valid = await user.validPassword(password);
      if (!valid)
        return res.status(401).json({ error: 'Credenciais inválidas' });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '12h' }
      );

      return res.json({ token });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};
