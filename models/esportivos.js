const mongoose = require('mongoose');

const Esportivos = mongoose.Schema({

    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true
    },

    tempo100km: {
      type: Number,
      required: true
    },

    melhorias: {
        type: [String],
        required: false 
    }

}, { versionKey: false });

module.exports = mongoose.model('Esportivos', Esportivos);