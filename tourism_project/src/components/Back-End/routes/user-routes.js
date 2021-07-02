const express = require('express');
const mongoose = require("mongoose");
const userController = require('../controllers/user-controller');
const router= express.Router();

router.get("/destinations", userController.searchDestination);

module.exports = router;