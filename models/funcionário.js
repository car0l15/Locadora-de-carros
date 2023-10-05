const mongoose = require('mongoose');

const Funcionarios = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    CPF: {
        type: String,
        required: true
    },

    idade: {
        type: String,
        required: true
    },

    dtNascimento: {
        type: Date,
        required: true
    },

    telefone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },

    qtDeAlugueis: {
        type: Number,
        required: true
    },

    statusAtivo: {
        type: Boolean,
        required: true
    }

}, {versionKey: false})

module.exports = mongoose.model('Funcionarios', Funcionarios);