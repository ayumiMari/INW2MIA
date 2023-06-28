const leia = require("prompt-sync")()

let cod = [
'GRP0X-01',
'GRP0X-02',
'GRP0X-03',
'GRP0X-04',
'GRP0X-05',
'GRP0X-06',
'GRP0X-07',
'GRP0X-08',
'GRP0X-09',
'GRP0X-10',
]
let produto = [
'BONÉ             ',
'CALÇA            ',
'BERMUDA AFRO     ',
'BATA             ',
'CAMISA AFRO      ',
'SAIA RODADA      ',
'SAIA STYLE       ',
'MACACÃO          ',
'CAMISETA TEMATICA',
'CALÇA SOCIAL AFRO'
]
let valor = [
100.00,
150.00,
90.00,
140.00,
150.00,
90.00,
90.00,
150.00,
100.00,
95.50
]
let estoque = [10,10,10,10,10,10,10,10,10,10]
let carrinho = [0,0,0,0,0,0,0,0,0,0]
let op
let auxCodigo

//tela 1
do {
    console.log("Ayu Roupas")
    console.log("A melhor loja que você irá conhecer!!!")
    console.log("\n")

    console.log("COD\t\tDESCRICAO\tVALOR\tESTOQUE")
    for(let i=0; i<cod.length; i++){
        console.log(cod[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i])
    }

    op = leia("Deseja fazer alguma compra?\n Digite S para sim e N para não: ").toUpperCase() 
    console.log("COMPRAS")
    //LAÇO DAS COMPRAS
    while(true)
    {
        auxCodigo = leia("Digite o código do produto que deseja comprar: ").toUpperCase()
        for(let i=0; i<cod.length; i++)
        {
            if(auxCodigo==cod[i])
            {
                console.log(cod[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i])
                carrinho[i] = parseInt(leia("Digite a quantidade que deseja comprar : "))
                console.log(" Sub-total "+(valor[i]*carrinho[i]))
            }
        }
        console.log("CARRINHO DE COMPRAS")
        console.log("COD\t\tDESCRICAO\tVALOR\tESTOQUE\tQTDE COMPRADA")
        for(let i=0; i<cod.length; i++)
        {
            if (carrinho[i]>0){
                console.log(cod[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carrinho[i])
            }
        }
        let continua = leia("Digite S/N caso queira continuar comprando: ").toUpperCase()
        if(continua=='N'){
            break
        }
    }
} while(op!='N')
console.log("ATÉ BREVE!!!")