const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Aca van las rutas cel CRUD
router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.mostrarUnCliente);
router.delete('/:id', clienteController.eliminarCLlientes);
router.put('/:id', clienteController.modificarCliente);
module.exports = router;