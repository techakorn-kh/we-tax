const express = require('express');
const oneBoxController = require('../controllers/oneBoxController');

const router = express.Router();

router.post('/text-to-one-box', oneBoxController.sendTextFile)
router.post('/pdf-to-one-box', oneBoxController.sendPDFFile);

module.exports = router;