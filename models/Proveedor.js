const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    nit: {
        type: Number,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    direccion: {
        type: String,
        require: true
    }
},{versionKey: false});

module.exports = mongoose.model('Proveedor', proveedorSchema);