const express = require('express');
const router = express.Router();
const promocoesController = require('../controllers/promocoesController');


router.post('/promocoes', promocoesController.postPromocoes)

module.exports = router