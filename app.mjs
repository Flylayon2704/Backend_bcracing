import express from "express";
import cors from "cors"; 
import authRoutes from "./routes/authRoutes.mjs";
import connectDB from "./config/db.mjs";
import productRoutes from "./routes/productRoutes.mjs";
import proveedorRouter from "./routes/proveedorRoutes.mjs";

const app = express();
app.use(express.json());
app.use(cors());
connectDB(); 

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/proveedores", proveedorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});