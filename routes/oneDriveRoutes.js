const express = require('express');
const oneDriveController = require('../controllers/oneDriveController');

const router = express.Router();

router.post('/text-to-one-drive', oneDriveController.sendTextFile)
router.post('/pdf-to-one-drive', oneDriveController.sendPDFFile);

module.exports = router;