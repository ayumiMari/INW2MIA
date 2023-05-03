let aviao = {
    modelo: "Bristol Brabazon",
    ano: 1949,
    velocidade: 0,
    velocidadeMaxima: 800,
    ligado: false,
    piloto: "Joana Flores",

    ligar: function(){
        if(this.ligado == false){
            this.ligado = true
            console.log("Ligando o Avião...")
        } else {
            console.log("O avião já está em funcionamneto")
        }
    },
    acelerar: function(){
        if(this.velocidade < this.velocidadeMaxima && this.ligado == true){
            this.velocidade += 10
            console.log(`Sua velocidade no momento está em  ${this.velocidade}km/h`)
        } else if(this.velocidade = this.velocidadeMaxima){
            console.log("Sua velocidade máxima já foi atingida")
        } else {
            console.log("Ligar o avião para começar a acelerar")
        }
    },
    decolar: function(){
        if(this.velocidade == 200 && this.ligado == true){
            console.log("Decolando...")
        } else if(this.velocidade < 200){
            console.log("Atinja 200km/h para decolar")
        } else {
            console.log("Ligue o avião para que comecemos a nos preparar para decolar")
        }
    },
    aterrissagem: function(){
        if(this.velocidade == 200 && this.ligado == true){
            console.log("Aterrissando...")
        } else if(this.velocidade > 200){
            console.log("Atinjir 200km/h para se aterrissar")
        } else {
            console.log("Ligue o avião para poder aterrissar")
        }
    },
    desacelerar: function(){
        if(this.ligado == true && this.velocidade > 0){
            this.velocidade -= 10
            console.log(`Sua velocidade no momento está em ${this.velocidade}km/h`)
        } else if(this.ligado == false) {
            console.log("Ligue o avião para poder desacelerar")
        } else {
            console.log("Sua velocidade se encontra no mínimo de ( 0km/h )")
        }
    },
    desligar: function(){
        if(this.ligado == true && this.velocidade == 0){
            this.ligado = false
            console.log("Desligado.")
        } else if(this.ligado == false){
            console.log("O avião se encontra desligado")
        } else {
            console.log("O Avião precisa estar com a velocidade em 0 para se desligar")
        }
    }
}

aviao.ligar();

let i = 0

while (i < 20){
    aviao.acelerar();
    i++;
}

aviao.decolar();

i = 0;

while (i < 60){
    aviao.acelerar();
    if(i == 9){
        console.log("Entrando em velocidade de Cruzeiro")
    }
    i++;
}

i = 0;

while (i < 60){
    aviao.desacelerar();
    if(i == 49){
        console.log("Saindo da velocidade de Cruzeiro")
    }
    i++;
}

aviao.aterrissagem();

i = 0;

while (i < 20){
    aviao.desacelerar();
    i++;
}

aviao.desligar();