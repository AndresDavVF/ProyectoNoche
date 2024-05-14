const express = require('express');
const router = express.Router();
const productController = require('../controllers/productoController');

// Aca van las rutas cel CRUD
router.post('/', productController.agregarProducto);
router.get('/', productController.mostrarProductos);
router.get('/:id', productController.mostrarUnProducto);
router.delete('/:id', productController.eliminarProductos);
router.put('/:id', productController.modificarProducto);
module.exports = router;