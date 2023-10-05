const Cliente = require('../models/cliente');

module.exports = class ClienteController 
{
    static async postCliente(req, res)
    {

        const cliente = new Cliente
        ({
            nome: req.body.nome,
            CPF: req.body.CPF,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            nmrCarteiraMotorista: req.body.nmrCarteiraMotorista,
            anoVencimentoCarteira: req.body.anoVencimentoCarteira,
            fotoDaCarteira: req.body.fotoDaCarteira
        })

        console.log(cliente)

        cliente.save(cliente).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir dados do cliente`
            });
        });
    }

    static async getCliente(req, res)
    {
       const cliente = await Cliente.findOne({CPF: req.body.CPF})

       cliente.save(cliente).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || `Erro ao tentar inserir dados do cliente`
        });
    });
    }

}