const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
const path = require("path");
const adminController = require("../controllers/user");

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "login.html"));
}); 


router.post("/login", adminController.postLogin);

exports.router = router;

