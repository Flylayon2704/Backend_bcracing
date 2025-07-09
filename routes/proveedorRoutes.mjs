import { ProveedorController } from "../controllers/proveedorController.mjs";
import { Router } from "express";

const proveedorRouter = Router();

proveedorRouter.post("/", ProveedorController.createProveedor);
proveedorRouter.get("/", ProveedorController.getAllProveedores);
proveedorRouter.get("/:id", ProveedorController.getProveedorById);
proveedorRouter.put("/:id", ProveedorController.updateProveedor);
proveedorRouter.delete("/:id", ProveedorController.deleteProveedor);

export default proveedorRouter;