const mongoose= require("mongoose");
const express= require("express");
const adminController=require('../controllers/admin-controller');
const { Router } = require("express");
const router= express.Router();

router.post("/signup",adminController.adminSignup);
router.post("/login", adminController.adminLogin);
router.post("/addDestination", adminController.destinationAdd);
router.delete("/delete", adminController.destinationDelete);

module.exports= router;