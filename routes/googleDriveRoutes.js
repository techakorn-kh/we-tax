const express = require('express');
const googleDriveController = require('../controllers/googleDriveController');

const router = express.Router();

router.post('/text-to-google-drive', googleDriveController.sendTextFile)
router.post('/pdf-to-google-drive', googleDriveController.sendPDFFile);

module.exports = router;