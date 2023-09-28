const express = require('express')

const router = express.Router()

const reservaController = require('../controllers/reservaController')


router.post('/reservas', reservaController.postReserva)
router.get('/reservas', reservaController.getReservaPorPlaca)
router.put('/reserva', reservaController.putReserva)

module.exports = router