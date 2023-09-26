const express = require('express')

const router = express.Router()

const esportivoController = require('../controllers/esportivosController')
router.post('/carro-esportivos', esportivoController.postSporting)

module.exports = router;