const express = require('express');
const app = express();
const productoRoutes = require('./routes/productoRoutes'); // Importar rutas

//recibir datos en formato JSON en las peticiones POST
app.use(express.json());

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


// Conectar las rutas de productos (/productos)
app.use('/productos', productoRoutes);

module.exports = app;