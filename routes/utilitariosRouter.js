const express = require('express')

const router = express.Router()

const utilitarioController = require('../controllers/utilitariosController')
router.post('/carro-utilitario', utilitarioController.postUtility)

module.exports = router;