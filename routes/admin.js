const express = require("express");
const router = express.Router();
const rootDir = require("../helper/path");
const path = require("path");
const adminController = require("../controllers/admin");


router.get("/",adminController.getAdmin);

module.exports = router;