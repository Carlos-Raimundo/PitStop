const { Diagnostic, Vehicle, OBDCode } = require('../models');
module.exports = {
    async create(req, res) {
        try {
            const diag = await Diagnostic.create(req.body);
            return res.status(201).json(diag);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async listByVehicle(req, res) {
        const diagnostics = await Diagnostic.findAll({
            where: {
                vehicleId:
                    req.params.vehicleId
            }, include: ['codigo_obd']
        });
        return res.json(diagnostics);
    }
};