const mongoose = require('mongoose');

const Utilitarios = mongoose.Schema({

    qntPassageiros: {

        type: Number,
        required: true
    },

    tamanhoBageiro: {
        type: Number,
        required: true
    },

    kmPorLitroDeGasolina: {
        type: Number,
        required: true
    }

}, {versionKey: false });

module.exports = mongoose.model('Utilitarios', Utilitarios);