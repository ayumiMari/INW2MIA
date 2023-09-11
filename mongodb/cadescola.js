//configurar a conexao com o mongodb e o banco de dados


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error ', console.error.bind(console, 'connection error: '));

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB <: ");
});

//criando collection dentro do mongodb

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const aluno = mongoose.model("Aluno" , alunoSchema)

const Patrícia = new aluno({
    matricula: 'rm12392',
    nome :  'Patrícia Gomes',
    idade : 15 ,
    turma : '2EMIA'
})

const Piettra = new aluno({
    matricula: 'rm134322',
    nome :  'Piettra Carvalho',
    idade : 15 ,
    turma : '2EMIA'
})

Patrícia.save();
Piettra.save();

aluno.findOne({nome : 'Piettra Carvalho'}, function(err,aluno){
    console.log(aluno)
})