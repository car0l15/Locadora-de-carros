const CarrosEsportivos = require('../models/esportivos');
const Carro = require('../models/carros');

module.exports = class esportivosController 
{
    static async postSporting(req, res) 
    {
        
        const c = await Carro.findOne({ placa: req.body.placa });

        const carrosEsportivos = new CarrosEsportivos({    
            idCarro: c._id,
            tempo100km: req.body.tempo100km,
            mellhorias: req.body.mellhorias
        })

        carrosEsportivos.save(carrosEsportivos).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.menssage || `Erro ao tentar inserir dados na categoria esportiva`
            })
        })

    }
};