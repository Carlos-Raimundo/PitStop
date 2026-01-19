const { Vehicle } = require('../models');
module.exports = {
    async create(req, res) {
        try {
            const vehicle = await Vehicle.create(req.body);
            return res.status(201).json(vehicle);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async list(req, res) {
        const vehicles = await Vehicle.findAll();
        return res.json(vehicles);
    },
    async get(req, res) {
        const vehicle = await Vehicle.findByPk(req.params.id);
        if (!vehicle) return res.status(404).json({ error: 'Not found' });
        return res.json(vehicle);
    }
};