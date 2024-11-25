// backend/routes/mainDashboardRoutes.js
const express = require('express');
const router = express.Router();
const mainDashboardController = require('../controllers/mainDashboardController');

router.get('/', mainDashboardController.getMainDashboard);

module.exports = router;
