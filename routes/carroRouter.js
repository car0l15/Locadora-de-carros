const express = require('express')

const router = express.Router()

const carroController = require('../controllers/carroController')

router.get('/carro-placa', carroController.getCarroPorPlaca)
router.post('/carros', carroController.postCar)
router.get('/carros', carroController.getAllCars)
router.get('/carros-tipos', carroController.getPeloTipo)

module.exports = router;