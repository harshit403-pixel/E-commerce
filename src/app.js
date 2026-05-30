import express from "express";
import cors from "cors";

import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());


// serving uploads folder publicly
app.use("/uploads", express.static("uploads"));


// api routes
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-commerce API Running",
  });
});

export default app;