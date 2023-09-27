const express = require('express')

const router = express.Router()

const promocaoController = require('../controllers/promocaoController')
router.post('/promocao', promocaoController.postPromocao)

module.exports = router