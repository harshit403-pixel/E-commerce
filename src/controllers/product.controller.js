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
export const getProductById = async (req, res, next) => {
  try {

    const product = await Product.findById(req.params.id);

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

    // passing error to middleware
    next(error);
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
export const updateProduct = async (req, res, next) => {
  try {

    const { name, description, price, category } = req.body;

    // finding product first
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // updating fields only if provided
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;

    // if new images uploaded
    if (req.files && req.files.length > 0) {

      const images = req.files.map((file) => file.path);

      product.images = images;
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });

  } catch (error) {

    next(error);
  }
};



// DELETE PRODUCT
// Route: DELETE /products/:id
export const deleteProduct = async (req, res, next) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {

    next(error);
  }
};