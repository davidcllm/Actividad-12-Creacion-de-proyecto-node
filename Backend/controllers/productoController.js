const Producto = require('../models/Producto');

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos' });
    }
};

// Obtener un producto por ID
exports.obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener el producto' });
    }
};

// Agregar un nuevo producto
exports.crearProducto = async (req, res) => {
    try {
        // req.body contiene los datos enviados en formato JSON
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al crear el producto' });
    }
};

// Actualizar un producto existente (PUT)
exports.actualizarProducto = async (req, res) => {
    try {
        // { new: true } devuelve el documento ya actualizado; runValidators valida el esquema
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Hubo un error al actualizar el producto' });
    }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.json({ msg: 'Producto eliminado correctamente', producto: productoEliminado });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al eliminar el producto' });
    }
};