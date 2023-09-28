const express = require('express')

const router = express.Router()

const reservaController = require('../controllers/reservaController')


router.post('/reserva', reservaController.postReserva)
router.get('/reserva', reservaController.getReservaPorPlaca)
router.put('/reserva', reservaController.putReserva)

module.exports = router