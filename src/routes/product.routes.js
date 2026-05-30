import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", getAllProducts);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// CREATE PRODUCT
router.post("/", createProduct);


// UPDATE PRODUCT
router.put("/:id", updateProduct);
 

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;