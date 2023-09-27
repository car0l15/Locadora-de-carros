const express = require('express');
const database = require('./configs/database');


database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('conexão estabelecida');
    }).catch(error => {
        console.log('error ao estabelecer conexão com o db', error);
        process.exit();
    })


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let carroRouter = require('./routes/carroRouter');
app.use('/', carroRouter);

let esportivoRouter = require('./routes/esportivoRouter');
app.use('/', esportivoRouter);

let utilitarioRouter = require('./routes/utilitariosRouter');
app.use('/', utilitarioRouter);

let clienteRouter = require('./routes/clienteRouter');
app.use('/', clienteRouter);

let funcionarioRouter = require('./routes/funcionarioRouter');
app.use('/', funcionarioRouter);

let reservaRouter = require('./routes/reservaRouter');
app.use('/', reservaRouter);

let promocaoRouter = require('./routes/promocaoRouter');
app.use('/', promocaoRouter);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log('ouvindo a porta', PORT);
});
