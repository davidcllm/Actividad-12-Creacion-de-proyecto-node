const express = require('express');
const app = express();
const puerto = 3000;

// Ruta principal para mostrar el mensaje en el navegador
app.get('/', (req, res) => {
    res.send('API REST funcionando correctamente');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});