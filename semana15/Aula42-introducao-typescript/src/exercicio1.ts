//a)
// let minhaString:string = "American"
// minhaString = 3
// deu erro, pois a variavel deve receber strings

// b)
let meuNumero:number | string = 3
meuNumero = "três"


//d)
enum Cores {
    VERMELHO = "Vermelho",
    ALARANJADO = "Alaranjado",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}


// c)

type pessoa = {
    nome: string
    idade: number
    corFavorita:Cores
}

const pessoa1:pessoa ={
    corFavorita: Cores.AZUL,
    idade: 34,
    nome: "Adenor"
}
const pessoa2:pessoa ={
    corFavorita: Cores.VERMELHO,
    idade: 19,
    nome: "Gabriel"
}
const pessoa3:pessoa ={
    corFavorita: Cores.VERDE,
    idade: 22,
    nome: "Mariana"
}

// d) linha 11

