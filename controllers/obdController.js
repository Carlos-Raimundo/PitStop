const { OBDCode } = require('../models');
module.exports = {
    async list(req, res) {
        const codes = await OBDCode.findAll();
        return res.json(codes);
    },
    async create(req, res) {
        try {
            const code = await OBDCode.create(req.body);
            return res.status(201).json(code);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
};