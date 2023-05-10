class Animal{
    constructor(tipo,porte,femea,nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }
    
    barulhoDoAnimal(){
        console.log("Luana latindo...")
        this.barulhoDoAnimal = true
    }
    //Ele retorna o número o inteiro do ano menos o ano de nascimento
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}


//Extensão de uma classe em outra -- usar (extends)
//O 'super' referencia a class
class Cachorro extends Animal {
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca,
        this.cor = cor
    }

    latindo(){
        console.log("Au Au Au...")
    }

}


class Gato extends Animal {
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca,
        this.cor = cor
    }

    miar(){
        console.log("Miauuuu...")
    }

}



//Boolean é basicamente o termo usado na computação para números binários (1 a 0), por isso não é preciso as aspas.
//Programa Principal
let animal1 = new Animal("Mamifero","Médio",false,"27/04/2020")
console.log(animal1)
console.log(animal1.porte)
animal1.barulhoDoAnimal()

let gatoFrajola = new Gato("Felino","Sphynx","Preto")
gatoFrajola.barulhoDoAnimal()
gatoFrajola.miar()


let zangado= new Cachorro("Canino","Beagle","Preto")
zangado.barulhoDoAnimal()
zangado.latindo()

//Saber idade dos animais

zangado.nascimento = 2021
console.log("A idade é "+zangado.retornarIdade(2023))
