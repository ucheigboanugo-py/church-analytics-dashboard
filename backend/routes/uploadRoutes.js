// backend/routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/csv', upload.single('file'), uploadController.uploadCSV);

module.exports = router;
