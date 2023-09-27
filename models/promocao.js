const mongoose = require('mongoose');

const Promocoes = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    dtValidade: {
        type: Date,
        required: false
    }
}, {versionKey: false})

module.exports = mongoose.model('Promocoes', Promocoes);