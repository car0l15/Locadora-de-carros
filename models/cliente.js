const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
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

    nmrCarteiraMotorista: {
        type: Number,
        required: true
    },

    anoVencimentoCarteira: {
        type: Number,
        required: true
    },

    fotoDaCarteira: {
        type: Buffer,
        contentType: String,
        required: false
    },


}, { versionKey: false })

module.exports = mongoose.model('Cliente', Cliente);