const mongoose = require('mongoose');

const Utilitarios = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },

    qntPassageiros: {

        type: Number,
        required: true
    },

    tamanhoBagageiro: {
        type: Number,
        required: true
    },

    kmPorLitroDeGasolina: {
        type: Number,
        required: true
    }

}, {versionKey: false });

module.exports = mongoose.model('Utilitarios', Utilitarios);