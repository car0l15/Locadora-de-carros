const Funcionario = require('../models/funcionário');

module.exports = class FuncionarioController 
{
    static async postFuncionario(req, res)
    {
        console.log(req.body);

        const funcionario = new Funcionario
        ({
            nome: req.body.nome,
            CPF: req.body.CPF,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            salario: req.body.salario,
            qtDeAlugueis: req.body.qtDeAlugueis,
            statusAtivo: req.body.statusAtivo
        })

        funcionario.save(funcionario).then(data => {
            res.send(data);
        }).catch(err => {
           res.status(500).send({
            message: err.menssage || 'Erro ao tentar cadastrar novo funcionário'
           })
        });
    }
}



