//Exercício de interpretação de código

/*1.
let a = 10
let b = 10

console.log(b) //aqui irá mostrar o valor 10 em Number

b = 5
console.log(a, b) //aqui irá mostrar os seguintes valores 10 5 ambos em Number

//2.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) //aqui irá mostrar 10 10 10,
 pois c recebe a quevale 10, b(que era 20) agoora recebe c
 que é 10 e a recebe b que agora é 10

 //3.
 
let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhoDia/salarioDia} por hora`)*/

//Exercício de escrita de código

let nome 
let idade
console.log(typeof nome, typeof idade) //foi impresso undefined pois eu apenas chamei as variáveis sem atribuir nada a ela 
nome = prompt("Escreva nesse campo o seu nome.")
idade = prompt("Agora escreva sua idade com algarismos numéricos")

const cachorro = prompt("você tem cachorro?")
const roupaAzul = prompt("você está usando azul?")
const pastel = prompt("você gosta de pastel?")
console.log(typeof nome, typeof idade)//foi impresso na tela que as duas variáveis são do tipo string
console.log("Olá,", nome+", você tem", idade, "anos")
console.log("você tem cachorro?", cachorro)
console.log("você está usando azul?", roupaAzul)
console.log("você gosta de pastel?", pastel)


let a = 10
let b = 25
let c 
c = b
b = a
a = c
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
