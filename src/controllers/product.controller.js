import Product from "../models/product.model.js";


// GET ALL PRODUCTS
// Route: GET /products
export const getAllProducts = async (req, res) => {
  try {

    // getting category from query params
    // example: /products?category=electronics
    const { category } = req.query;

    // empty object means fetch all products
    let filter = {};

    // if category exists then filter products
    if (category) {
      filter.category = category;
    }

    // fetch products from database
    const products = await Product.find(filter);

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// GET SINGLE PRODUCT
// Route: GET /products/:id
export const getProductById = async (req, res) => {
  try {

    // getting product id from params
    const product = await Product.findById(req.params.id);

    // checking if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// CREATE PRODUCT
// Route: POST /products
export const createProduct = async (req, res) => {
  try {

    // destructuring request body
    const { name, description, price, category } = req.body;

    // manual validation
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Name and price are required",
      });
    }

    // multer stores uploaded files in req.files
    // extracting image paths
    const images = req.files.map((file) => file.path);

    // creating new product
    const product = await Product.create({
      name,
      description,
      price,
      category,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// UPDATE PRODUCT
// Route: PUT /products/:id
export const updateProduct = async (req, res) => {
  try {

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // returns updated document
      }
    );

    // checking if product exists
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// DELETE PRODUCT
// Route: DELETE /products/:id
export const deleteProduct = async (req, res) => {
  try {

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    // checking if product exists
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};