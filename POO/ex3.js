class Pessoa {
    constructor(cpf,nome,telefone,anoDeNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.anoDeNascimento = anoDeNascimento
    }
    
    mostraIdade(){
        console.log(2023-this.anoDeNascimento)
    }
}

let cliente = new Pessoa(3721351,"Joana Flores",11.993234234,1983)

console.log("A idade desse Cliente é de ")
cliente.mostraIdade()

