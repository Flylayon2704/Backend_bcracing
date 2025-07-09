import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    codigo:{
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria_id: {
        type: Number,
        required: true
    },
    categoria_nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precio_compra: {
        type: Number,
        required: true
    },
    precio_venta: {
        type: Number,
        required: true
    },
    stock_minimo: {
        type: Number,
        required: true
    },
    stock_actual: {
        type: Number,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    }

})

export default mongoose.model('Product', productSchema);