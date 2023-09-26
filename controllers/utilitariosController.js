const CarrosUtilitarios = require('../models/utilitarios');
const Carro = require('../models/carros');

module.exports = class utiliariosController 
{
    static async postUtility(req, res)
    {
        const c = await Carro.findOne({ placa: req.body.placa });

        const carrosUtilitarios = new CarrosUtilitarios({
            idCarro: c_id,
            qntPassageiros: req.body.qntPassageiros,
            tamanhoBageiro: req.body.tamanhoBageiro,
            kmPorLitroDeGasolina: req.body.kmPorLitroDeGasolina
        })

        carrosUtilitarios.save(carrosUtilitarios).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir dados na categoria utilitária`
            })
        })
    }
}
