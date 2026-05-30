import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

  try {

    // getting token from headers
    // format:
    // Authorization: Bearer token_here

    const authHeader = req.headers.authorization;

    // checking if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {

      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // extracting token
    const token = authHeader.split(" ")[1];

    // verifying token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // storing decoded data in request
    req.user = decoded;

    // move to next middleware/controller
    next();

  } catch (error) {

    res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }
};

export default authMiddleware;