const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas base: /productos
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProductoPorId);
router.post('/', productoController.crearProducto);

module.exports = router;