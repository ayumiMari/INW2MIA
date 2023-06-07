console.log("NOME     NOTA") //(\n) serve para pular linha

console.log("Eduardo\t5,5")// (\t) serve para deixar em ordem

const leia = require("prompt-sync")() // se usa para ligar no terminal

let valor1 = 0

let valor2 = 0

let nome = leia("Digite o seu nome: ")

valor1 =parseInt(leia ("Digite o primeiro valor: "))

valor2 =parseInt(leia ("Digite o segundo valor: "))

console.log("Olá "+nome.toUpperCase()+" a soma dos dois valores é de: "+(valor1+valor2))

//toUpperCase() serve para deixar os atributos em maiusculo
// parseFloat numero com ponto ou virgula
//console.log(nome.length) serve para  retornar a quantidade de caracteres de uma string ou o tamanho de um array e retorna um valor inteiro fornecendo o número 

/*
let valor1 
let valor2 = 10.25
let nome 
let letra = 'C'
let ativo = true //variavel lógica

console.log(letra) */


