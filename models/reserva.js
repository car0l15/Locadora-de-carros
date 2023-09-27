const mongoose = require('mongoose');

const Reserva = new mongoose.Schema({
    placaCarro: {
       type: String,
        ref: 'Carro',
        require: true
    },

    cpfCliente: {
        type: String,
        ref: 'Cliente',
        require: true
    },

    status:{
        type: Boolean,
        require: true
    },

    dtInicio: {
        type: Date,
        require: true
    },

    dtFinal: {
        type: Date,
        require: true
    }
}, {versionKey: false })

module.exports = mongoose.model('Reserva', Reserva);