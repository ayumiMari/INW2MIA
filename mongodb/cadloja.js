const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const { on } = require('events');

//conectar banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
});

const produtosSchema = new mongoose.Schema({
    cod : String,
    desc : String,
    valor : Number,
    estoque : Number
})

const produtos = mongoose.model('produtos' , produtoSchema);

function lerCSVSalvarMongo(){
    const resultado = []

    fs.createReadStream('base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end', ()=>{
        produtos.insertMany(resultados)
        .then(()=>{
            console.log('Dados importados com sucessso');
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.log('Erro ao importar os dados: ', error);
            mongoose.connection.close();
        })
    })
}

lerCSVSalvarMongo();