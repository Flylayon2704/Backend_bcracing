import { ProveedorService } from "../services/proveedorService.mjs";

export class ProveedorController {
    static async createProveedor(req, res) {
        try {
            const proveedor = await ProveedorService.createProveedor(req.body);
            res.status(201).json(proveedor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllProveedores(req, res) {
        try {
            const proveedores = await ProveedorService.getAllProveedores();
            res.status(200).json(proveedores);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProveedorById(req, res) {
        try {
            const proveedor = await ProveedorService.getProveedorById(req.params.id);
            res.status(200).json(proveedor);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async updateProveedor(req, res) {
        try {
            const updatedProveedor = await ProveedorService.updateProveedor(req.params.id, req.body);
            res.status(200).json(updatedProveedor);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteProveedor(req, res) {
        try {
            const deletedProveedor = await ProveedorService.deleteProveedor(req.params.id);
            res.status(200).json(deletedProveedor);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}