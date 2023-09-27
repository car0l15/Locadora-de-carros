const Reserva = require('../models/reserva');
const Cliente = require('../models/cliente');
const Carro = require('../models/carro');

module.exports = class ReservaController 
{
    static async postReserva(req, res)
    {
        const carro = await Carro.findOne({ placa: req.body.placa });
        const cliente = await Cliente.findOne({ cpf: req.body.cpf });

        const reserva = new Reserva
        ({
            placaCarro: Carro.placa,
            cpfCliente: Cliente.CPF,
            status: req.body.status,
            dtInicio: req.body.status,
            dtFinal: req.body.dtFinal
        })
    }
}