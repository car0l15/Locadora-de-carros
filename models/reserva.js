const mongoose = require('mongoose');

const Reserva = new mongoose.Schema({
    placa: {
       type: String,
        ref: 'Carro',
        required: true
    },

    cpfCliente: {
        type: String,
        ref: 'Cliente',
        required: true
    },

    status:{
        type: Boolean,
        required: true
    },

    dtInicio: {
        type: Date,
        required: true
    },

    dtFinal: {
        type: Date,
        required: true
    }
}, {versionKey: false })

module.exports = mongoose.model('Reserva', Reserva);