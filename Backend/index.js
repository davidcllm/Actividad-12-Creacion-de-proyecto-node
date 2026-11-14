require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app'); 

const puerto = 3000;
const url = process.env.MONGO_URI;

// se conecta MongoDB con Mongoose
mongoose.connect(url)
  .then(() => {
    console.log('Conectado exitosamente a MongoDB con Mongoose');
    
    // Iniciar el servidor
    app.listen(puerto, () => {
        console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
    });
  })
  .catch(error => {
    console.error('Error conectando a MongoDB:', error);
  });