const Carro = require('../models/carros');

module.exports = class ControllerCarro 
{
    static async postCar(req, res) 
    {
        console.log(req.body)

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
            });
        }
    }

    static async getPeloTipo(req, res) {
        Carro.find({ tipo: req.body.tipo }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || `Erro ao tentar buscar carro pelo tipo: ${req.body.tipo}.`
            });
        });
    }

    static async getCarroPorPlaca(req, res)
    {
        const carro = await Carro.findOne({ placa: req.body.placa })

        if(!carro){
            return res.status(404).json({
                message: `não foi possivel encontrar as informações do carro de placa ${req.body.placa}`
            });
        }

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Erro ao buscar carro'
            })
        });
    }

}

