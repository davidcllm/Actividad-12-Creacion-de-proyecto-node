require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = require('./app'); // Se importan los endpoints

const puerto = 3000;
const url = process.env.MONGO_URI;
const dbName = 'miTienda'; 

// Conectar a MongoDB
MongoClient.connect(url)
  .then(client => {
    console.log('Conectado exitosamente a MongoDB');
    
    // Se inyecta la base de datos en las variables locales de la app
    // para que las rutas en app.js puedan acceder a ella.
    app.locals.db = client.db(dbName);

    // Iniciar el servidor solo después de que la base de datos se haya conectado
    app.listen(puerto, () => {
        console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
    });
  })
  .catch(error => {
    console.error('Error conectando a MongoDB:', error);
  });