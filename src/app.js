import express from "express";
import cors from "cors";

import productRoutes from "./routes/product.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());


// serving uploads folder
app.use("/uploads", express.static("uploads"));


// routes
app.use("/api/products", productRoutes);


// home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-commerce API Running",
  });
});


// error middleware should always be at bottom
app.use(errorMiddleware);

export default app;