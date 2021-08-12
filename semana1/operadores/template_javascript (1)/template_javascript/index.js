//Exercício de interpretação

//1.

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)// false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)// false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)// true

console.log("d. ", typeof resultado)// Boolean*/

//2.


/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)//será imprimido os números um segudo do outro ao invés de
//a soma dos dois, pois a resposta do prompt está em string, e seia necessária
//a conversão para Number*/

//3.

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//exercícios de escrita de código

//1.

// const suaIdade = Number(prompt("qual sua idade?"))
// const idadeAmigo = Number(prompt("qual a idade do(a) seu/sua melhor amigo(a)?"))
// console.log("sua idade é maior que do(a) seu/sua melhor amigo(a)?", suaIdade > idadeAmigo)

//2.

/*const numero = Number(prompt("insira um número par!"))
console.log("caso você realmente tiver posto um número par o seu resultado será 0, caso contrário dará 1, vamos ver então:", numero % 2)
// se for par dá 0, se for impar dará 1*/

//3.

/*const idade = Number(prompt("Quantos anos você tem?"))
console.log("sua idade em meses é:", idade * 12, "meses, sua idade em dias é:", idade * 365, "dias, sua idade em horas é:", idade * 365 * 24, "horas")
*/

//4

const numero1 = Number(prompt("escolha algum número de sua preferência"))
const numero2 = Number(prompt("Escolha mais um número de sua preferência"))
const priDivSeg = numero1 % numero2
const segDivPri = numero2 % numero1
console.log("O primeiro número é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", priDivSeg == 0)
console.log("O segundo numero é divisível pelo primeiro?", segDivPri == 0)

