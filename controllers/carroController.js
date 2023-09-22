const Carro = require('../models/carros');

module.exports = class ControllerCarro {
    static async postCar(req, res) {
        console.log(req.body);

        const carro = new Carro({
            placa: req.body.placa,
            ano: req.body.ano,
            cor: req.body.cor,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            kilometragem: req.body.kilometragem,
            diaria: req.body.diaria, 
            observacoes: req.body.observacoes
        });


        // fazendo esse try/catch apenas para subir mais um exemplo de tratativa

        // try {
        //     const result = await carro
        //     return res.status(200).json(result);
        // } catch (error) {
        //     res.status(500).send({
        //         message: error
        //     })
        // }

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || `Erro ao tentar inserir os dados da carro: ${carro}.`
            })
        
        });

        
        
    }
}