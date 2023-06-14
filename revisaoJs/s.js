const leia = require("prompt-sync")()

let limite = parseInt(leia("Digite um número de vezes: "))

for(let x=1; x<=limite; x++){
    console.log(x)
}