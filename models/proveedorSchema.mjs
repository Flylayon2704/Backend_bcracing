import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    contacto:{
        type: String,
        required: true,
        trim: true
    },
    telefono:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} no es un email válido!`
        }
    },
    direccion:{
        type: String,
        required: true,
        trim: true
    },
    ruc: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {timestamps: true});

export const Proveedor = mongoose.model("Proveedor", proveedorSchema);