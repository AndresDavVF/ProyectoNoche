const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    referencia: {
        type: String,
        require: true
    },
    garantia: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    proveedor: {
        type: String,
        require: true
    }
},{versionKey: false});

module.exports = mongoose.model('Producto', productoSchema);