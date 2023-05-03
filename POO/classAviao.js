
class Aviao {
    constructor(modelo,ano,velocidadeMaxima,piloto){
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeMaxima = velocidadeMaxima;
        this.piloto = piloto
    }

    ligar(){
        console.log("Ligando...")
        this.ligado = true
    }
}

let aviao = new Aviao("Bristol Brabazon",1994,800,"Joana Flores")
aviao.ligar()
console.log(aviao)