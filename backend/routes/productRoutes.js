const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

// GET a single product by ID
router.get("/:id", productController.getProductById);

// POST create a new product
router.post("/", productController.createProduct);

module.exports = router;
