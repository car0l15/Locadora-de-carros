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

    static async getReservaPorPlaca(req, res) 
    {
       const reserva = await Reserva.findOne({ placa: req.body.placa })

       if(!reserva){
        return res.status(404).json({
            message: `não foi possivel encontrar reserva para carro de placa ${req.body.placa}`
        })
       }

       reserva.save(reserva).then(data => {
        res.send(data);
    }).catch(err => {
       res.status(500).send({
        message: err.menssage || 'Erro ao buscar reserva'
       })
    });

    }

    static async putReserva(req, res)
    {
        const { id } = req.params;

        Reserva.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data =>{
            if(!data){
                res.status(404).send({
                    message: `reserva de id número ${id} não encontrada`
                })

                res.send({ message: `Reserva id: ${id} atualizada com sucesso.` })
            }
        }).catch(err => {
            res.status(500).send({
                message: "Erro ao tentar atualizar reserva com id: " + id
            });
        });
            
    }
}