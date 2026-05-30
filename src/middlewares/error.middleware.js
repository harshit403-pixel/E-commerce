const errorMiddleware = (error, req, res, next) => {

  // mongoose invalid object id error
  if (error.name === "CastError") {

    return res.status(400).json({
      success: false,
      message: "Invalid product ID",
    });
  }

  res.status(500).json({
    success: false,
    message: error.message || "Server Error",
  });
};

export default errorMiddleware;