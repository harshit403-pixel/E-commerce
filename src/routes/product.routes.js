import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import upload from "../middlewares/upload.middleware.js";

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", getAllProducts);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// CREATE PRODUCT
// upload.array("images", 5)
// "images" => field name
// 5 => maximum files
router.post(
  "/",
  upload.array("images", 5),
  createProduct
);


// UPDATE PRODUCT
router.put("/:id", updateProduct);


// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;