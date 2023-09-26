const Carro = require('../models/carros');

module.exports = class ControllerCarro 
{
    static async postCar(req, res) 
    {

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

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || `Erro ao tentar inserir os dados da carro: ${carro}.`
            })
        
        });

        
        
    };

    static async getAllCars(req, res) 
    {
        try {

        const carros = await Carro.find();
        return res.status(200).json(carros)
            
        } catch (error) {
            res.status(500).send({
        message: `ocorreu um erro ao estabelecer conexão: ${error.message}`
            })
        }
    }

   
}

