const mongoose = require('mongoose');

// Definimos el esquema con los atributos solicitados
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    existencia: { type: Number, required: true }
});

// Exportamos el modelo
module.exports = mongoose.model('Producto', productoSchema);