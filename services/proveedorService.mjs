import { Proveedor } from "../models/proveedorSchema.mjs";

export class ProveedorService {
    static async createProveedor(proveedorData) {
        const existingProveedor = await Proveedor.findOne({ ruc: proveedorData.ruc });
        if (existingProveedor) throw new Error('El proveedor ya existe');

        const proveedor = new Proveedor(proveedorData);
        await proveedor.save();
        return proveedor;
    }

    static async getAllProveedores() {
        return await Proveedor.find().limit(100);
    }

    static async getProveedorById(id) {
        const proveedor = await Proveedor.findById(id);
        if (!proveedor) throw new Error('Proveedor no encontrado');
        return proveedor;
    }

    static async updateProveedor(id, updateData) {
        const updatedProveedor = await Proveedor.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProveedor) throw new Error('Proveedor no encontrado');
        return updatedProveedor;
    }

    static async deleteProveedor(id) {
        const deletedProveedor = await Proveedor.findByIdAndDelete(id);
        if (!deletedProveedor) throw new Error('Proveedor no encontrado');
        return deletedProveedor;
    }
}