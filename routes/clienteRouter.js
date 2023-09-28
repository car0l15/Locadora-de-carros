const express = require('express')

const router = express.Router()

const clienteController = require('../controllers/clienteController')
router.post('/cliente', clienteController.postCliente)
router.get('/cliente', clienteController.getCliente)

module.exports = router