const express = require('express')

const router = express.Router()

const clienteController = require('../controllers/clienteController')
router.post('/clientes', clienteController.postCliente)

module.exports = router