const express = require('express');
const router = express.Router();

// Datos de ejemplo
const productos = [
  { id: 1, nombre: 'Leche', precio: 3500 },
  { id: 2, nombre: 'Pan', precio: 1200 },
];

// GET - Obtener todos los productos
router.get('/productos', (req, res) => {

  res.json({ success: true, data: productos });

});

// GET - Obtener un producto por ID
router.get('/productos/:id', (req, res) => {

  const producto = productos.find(p => p.id === parseInt(req.params.id));

  if (!producto) {

    return res.status(404).json({ success: false, message: 'Producto no encontrado' });

  } else {

    res.json({ success: true, data: producto });
  }

});


// POST - Crear un producto
router.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({
            success: false,
            message: 'Nombre y precio son obligatorios'
        });
    }

    const nuevoProducto = {
        id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
        nombre,
        precio
    };

    productos.push(nuevoProducto);

    res.status(201).json({
        success: true,
        data: nuevoProducto
    });
});


// PUT - Actualizar un producto
router.put('/productos/:id', (req, res) => {
    const { nombre, precio } = req.body;
    const id = parseInt(req.params.id);

    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        });
    }

    if (nombre) producto.nombre = nombre;
    if (precio) producto.precio = precio;

    res.json({
        success: true,
        data: producto
    });
});


// DELETE - Eliminar un producto
router.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        });
    }

    const productoEliminado = productos.splice(index, 1);

    res.json({
        success: true,
        data: productoEliminado[0]
    });
});


module.exports = router;