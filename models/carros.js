const mongoose = require('mongoose');

const Carro = mongoose.Schema({
    placa: {
        type: String,
        required: true
    },

    ano: {
        type: Number,
        required: true
    },

    cor: {
        type: String,
        required: false
    },

    modelo: {
        type: String,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },

    kilometragem: {
        type: Number,
        required: false
    },

    diaria: {
        type: Number,
        required: true
    },

    observacoes: {
        type: String,
        required: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Carro', Carro);