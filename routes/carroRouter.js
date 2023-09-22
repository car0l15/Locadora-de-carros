const express = require('express')

const router = express.Router()

const carroController = require('../controllers/carroController')

router.post('/carros', carroController.postCar)

module.exports = router;