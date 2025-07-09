import { ProductController } from "../controllers/productController.mjs";
import { Router } from "express";

const productRoutes = Router();

productRoutes.post("/", ProductController.createProduct);
productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.delete("/:id", ProductController.deleteProduct);

export default productRoutes;