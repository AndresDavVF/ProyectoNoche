const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Aca van las rutas cel CRUD
router.post('/', proveedorController.agregarProveedor);
router.get('/', proveedorController.mostrarProveedores);
router.get('/:id', proveedorController.mostrarUnProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);
router.put('/:id', proveedorController.modificarProveedor);
module.exports = router;