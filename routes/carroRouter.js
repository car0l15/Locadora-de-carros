const express = require('express')

const router = express.Router()

const carroController = require('../controllers/carroController')

router.post('/carros', carroController.postCar)
router.get('/carros', carroController.getAllCars)

module.exports = router;