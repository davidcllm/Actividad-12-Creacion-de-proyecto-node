const mongoose = require('mongoose');

// Se define el esquema con los atributos solicitados
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    existencia: { type: Number, required: true }
});

// exportar el modelo
module.exports = mongoose.model('Producto', productoSchema);