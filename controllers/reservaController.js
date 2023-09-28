const Reserva = require("../models/reserva");
const Cliente = require('../models/cliente');
const Carro = require('../models/carros');

module.exports = class ReservaController {

    static async postReserva(req, res) {
        console.log(req.body)

        const carro = await Carro.findOne({ placa: req.body.placa })

        const cliente = await Cliente.findOne({ CPF: req.body.cpfCliente})

        console.log(cliente)

       const reserva = new Reserva({
        placa: carro.placa,
        cpfCliente: cliente.CPF,
        status: req.body.status,
        dtInicio: req.body.dtInicio,
        dtFinal: req.body.dtFinal
       })

       reserva.save(reserva).then(data => {
        res.send(data);
    }).catch(err => {
       res.status(500).send({
        message: err.menssage || 'Erro ao tentar cadastrar nova reserva'
       })
    });
    }
}