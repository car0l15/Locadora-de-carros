const Promocoes = require('../models/promocoes')

module.exports = class PromocaoController 
{
    static async postPromocoes(req, res)
    {
        console.log(req.body);

        const promocao = new Promocoes
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
           });
        });
    }
}