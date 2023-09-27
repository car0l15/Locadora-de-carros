const express = require('express')

const router = express.Router()

const funcionarioController = require('../controllers/funcionarioController')
router.post('/funcionarios', funcionarioController.postFuncionario)

module.exports = router

// {

//     "nome": "Caio",
//     "CPF": "234.865.095-90",
//     "idade": 21,
//     "dtNascimento": "2002/05/08",
//     "telefone": 77991218239,
//     "email": "caio@gmail.com",
//     "endereco": "Avenida Brasil - 132",
//     "salario": 4500,
//     "qtDeAlugueis": 77,
//     "statusAtivo": true
//     }


// {
//     "titulo": "Diaria em dobro",
//     "dtValidade": "2023/12/01",
//     "descricao": "Promção válida para primeira compra onde o assinante contrata uma diaria e ganha outra de brinde"
//     }