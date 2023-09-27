const express = require('express')

const router = express.Router()

const reservaController = require('../controllers/reservaController')
router.post('/reservas', reservaController.postReserva)

module.exports = router