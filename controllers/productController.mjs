import { ProductService } from "../services/productService.mjs";

export class ProductController {
    static async createProduct(req, res) {
        try {
            const product = await ProductService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const product = await ProductService.getProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const deletedProduct = await ProductService.deleteProduct(req.params.id);
            res.status(200).json(deletedProduct);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}