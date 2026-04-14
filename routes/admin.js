const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
const path = require("path");
const userController = require("../controllers/user");
const productController = require("../controllers/product");


router.get("/", userController.getAdmin);
router.get("/users", userController.getUsers);
router.post("/users/create", userController.postCreateUser);
router.post("/users/update", userController.postUpdateUser);
router.post("/users/delete", userController.postDeleteUser);

router.get("/products", productController.getProducts);
router.post("/products/create", productController.postCreateProduct);
router.post("/products/update", productController.postUpdateProduct);
router.post("/products/delete", productController.postDeleteProduct);

module.exports = router;