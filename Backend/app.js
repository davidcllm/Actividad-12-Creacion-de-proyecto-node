const express = require('express');
const app = express();

// Rutas del API REST
// 1. GET / Mostrar un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('<h1>¡Bienvenido a la API REST de la tienda!</h1>');
});

// 2. GET /saludo Devolver un objeto JSON con un mensaje personalizado
app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "¡Hola! Esta es la API funcionando a la perfección.",
        estado: "Activo",
        fecha: new Date()
    });
});

// 3. GET /productos se muestran todos los documentos almacenados
app.get('/productos', async (req, res) => {
    try {
        // Recuperamos la instancia de la base de datos desde req.app.locals
        const db = req.app.locals.db;
        
        // Buscamos todos los documentos en la colección 'productos'
        const productos = await db.collection('productos').find().toArray();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos.' });
    }
});

module.exports = app;