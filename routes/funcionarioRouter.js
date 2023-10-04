const express = require('express')

const router = express.Router()

const funcionarioController = require('../controllers/funcionarioController')
router.post('/funcionarios', funcionarioController.postFuncionario);

module.exports = router
