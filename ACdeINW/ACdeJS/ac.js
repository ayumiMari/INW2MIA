//Loja de chocolates e doces

class ChocolatesDoces {
  constructor(id, descricao, ativo, preco, nomeProduto, validade, estoque) {
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.preco = preco;
    this.nomeProduto = nomeProduto;
    this.validade = validade;
    this.estoque = estoque;
  }

  ativar() {
    this.ativo = true;
  }

  retirarEstoque() {
    if (this.ativo) {
      if (valor < 0) {
        console.log("Impossivel realizar, valor negativo...");
      } else if (valor == 0) {
        console.log("Impossivel realizar, valor zerado...");
      } else if (valor > this.estoque) {
        console.log(
          "Impossivel realizar, essa quantidade está indisponivel no nosso estoque"
        );
      } else {
        this.estoque -= valor;
      }
    } else {
      console.log("Produto não encontrado");
    }
  }

  incluirEstoque() {
    if (this.ativo) {
      if (valor < 0) {
        console.log(
          "Impossivel adicionar essa quantidade ao estoque, valor negativo"
        );
      } else if (valor == 0) {
        console.log(
          "Impossivel adicionar essa quantidade ao estoque, valor zerado..."
        );
      } else if (valor > 10) {
        console.log(
          "Impossivel adicionar essa quantidade ao estoque, valor acima do limite..."
        );
      } else {
        this.estoque += valor;
      }
    } else {
      console.log("Produto não encontrado");
    }
  }
}

// PROGRAMA

const leia = require("prompt-sync")();
let op = "";

do {
  console.log("AYU DOCES");
  console.log("A melhor doceria \n");

  op = leia("Deseja fazer compras S/N: ").toUpperCase();

  if (op == "S") {
    console.log("AYU DOCES");
    console.log("A melhor doceria \n");

    const id = leia("Digite o id do produto: ");
    const descricao = leia("Digite a descrição do produto: ");
    const preco = leia("Digite o preço do produto: ");
    const nomeProduto = leia("Digite a marca do produto: ");
    const validade = leia("Digite o tipo de produto: ");
    const doce = new ChocolatesDoces(
        id,
        descricao, 
        false,
        preco, 
        nomeProduto, 
        validade,10
    );

    doce.ativar();

    for (let x = 1; x <= 5; x++) {
      console.log(doce);

      valor = parseInt(leia("Digite a quantidade a ser retirada do estoque: "));

      doce.retirarEstoque(valor);

      console.log("Estoque atual do produto: " + doce.estoque);
      console.log("Preço a ser pago: " + valor * doce.preco);
    }
    console.log(doce);
    valor = parseInt(leia("Digite a quantidade a ser adicionada ao estoque: "));
    doce.incluirEstoque(add);
    console.log("Estoque atual do produto: " + doce.estoque);
  } else {
    console.log("Valor digitado invalido");
  }
} while (op != "N");
console.log("Tchau!!");

