const express = require('express');
require('dotenv').config();
const router = express.Router();
const authController = require('../controllers/authController');
const vehicleController = require('../controllers/vehicleController');
const obdController = require('../controllers/obdController');
const diagnosticController =
    require('../controllers/diagnosticController');
const auth = require('../middleware/auth');

// Auth
router.post('/register', authController.register);
router.post('/login', authController.login);

// Vehicles
router.post('/vehicles', auth, vehicleController.create);
router.get('/vehicles', auth, vehicleController.list);
router.get('/vehicles/:id', auth, vehicleController.get);

// OBD Codes
router.get('/obdcodes', auth, obdController.list);
router.post('/obdcodes', auth, obdController.create);

// Diagnostics
router.post('/diagnostics', auth, diagnosticController.create);
router.get('/vehicles/:vehicleId/diagnostics', auth,
    diagnosticController.listByVehicle);
module.exports = router;