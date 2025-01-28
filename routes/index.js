const express = require('express');
const router = express.Router();

const googleDriveRoutes = require('./googleDriveRoutes');
const oneBoxRoutes = require('./oneBoxRoutes');
const oneDriveRoutes = require('./oneDriveRoutes');

router.use('/google-drive', googleDriveRoutes);
router.use('/one-box', oneBoxRoutes);
router.use('/one-drive', oneDriveRoutes);

module.exports = router;