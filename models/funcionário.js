const mongoose = require('mongoose');

const Funcionarios = new mongoose.Schema({

    nome: {
        type: String,
        require: true
    },

    CPF: {
        type: String,
        require: true
    },

    idade: {
        type: String,
        require: true
    },

    dtNascimento: {
        type: Date,
        require: true
    },

    telefone: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    endereço: {
        type: String,
        require: true
    },

    salario: {
        type: Number,
        require: true
    },

    qtDeAlugueis: {
        type: Number,
        require: true
    },

    statusAtivo: {
        type: Boolean,
        require: true
    }

}, {versionKey: false})

module.exports = mongoose.model('Funcionarios', Funcionarios);