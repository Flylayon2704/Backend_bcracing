import productSchema from "../models/productSchema.mjs";

export class ProductService {
    static async createProduct(productData) {
        const existingProduct = await productSchema.findOne({ codigo: productData.codigo });
        if (existingProduct) throw new Error('El producto ya existe');

        const product = new productSchema(productData);
        await product.save();
        return product;
    }

    static async getAllProducts() {
        return await productSchema
                        .find()
                        .limit(100);
    }

    static async getProductsByName(name){
        const products = await productSchema.find({ nombre: new RegExp(name, 'i') });
        return products;
    }

    static async getProductById(id) {
        const product = await productSchema.findById(id);
        if (!product) throw new Error('Producto no encontrado');
        return product;
    }

    static async updateProduct(id, updateData) {
        const updatedProduct = await productSchema.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProduct) throw new Error('Producto no encontrado');
        return updatedProduct;
    }

    static async deleteProduct(id) {
        const deletedProduct = await productSchema.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error('Producto no encontrado');
        return deletedProduct;
    }
}