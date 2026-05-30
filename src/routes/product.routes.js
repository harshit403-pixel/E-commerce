import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import upload from "../middlewares/upload.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", getAllProducts);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// CREATE PRODUCT
router.post(
  "/",
  authMiddleware,
  upload.array("images", 5),
  createProduct
);


// UPDATE PRODUCT
router.put(
  "/:id",
  authMiddleware,
  updateProduct
);


// DELETE PRODUCT
router.delete(
  "/:id",
  authMiddleware,
  deleteProduct
);

export default router;