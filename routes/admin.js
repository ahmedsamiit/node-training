const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
const path = require("path");
const userController = require("../controllers/user");


router.get("/", userController.getAdmin);
router.get("/users", userController.getUsers);
router.post("/users/create", userController.postCreateUser);
router.post("/users/update", userController.postUpdateUser);
router.post("/users/delete", userController.postDeleteUser);

module.exports = router;