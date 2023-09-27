const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
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

    nmrCarteiraMotorista: {
        type: Number,
        require: true
    },

    anoVencimentoCarteira: {
        type: Number,
        require: true
    },

    fotoDaCarteira: {
        type: Buffer,
        contentType: String,
        require: false
    },


}, { versionKey: false })

module.exports = mongoose.model('Cliente', Cliente);