const leia = require("prompt-sync")()

//Nota do Aluno
let aluno = leia("Digite seu nome: ")
let nota = parseInt(leia("Digite sua nota: "))
let tipo = leia("Digite (a) para aluna, (o) para aluno : ")

if(tipo == "o"){
    if(nota <= 5){
        console.log ("Olá aluno "+aluno+ ", você não passou, está de recuperação")
    }else {
        console.log("Parabéns!!!" +aluno+ " você passou de ano, curta as férias.")
    }
}

if(tipo == "a"){
    if(nota <= 5){
        console.log ("Olá aluna "+aluno+ ", você não passou, está de recuperação")
    }else {
        console.log("Parabéns!!!" +aluno+ " você passou de ano, curta as férias.")
    }
}