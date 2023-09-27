const Promocao = require('../models/promocao');

module.exports = class PromocaoController 
{
    static async postPromocao(req, res)
    {
        console.log(req.body);

        const promocao = new Promocao
        ({
           titulo: req.body.titulo,
           descricao: req.body.descricao,
           dtValidade: req.body.dtValidade
        })

        promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(err => {
           res.status(500).send({
            message: err.menssage || 'Erro no sistema de promoções'
           })
        });
    }
}