//exercícios de interpretação de códigos

//1.

// let array
// console.log('a. ', array)// undefined

// array = null
// console.log('b. ', array)// null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)// 11

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)// no lugar do 4 vai aparecer 19

// const valor = array[i+6]
// console.log('f. ', valor)// 9

//2.


// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//27 pois tambem é contado os espaços

//Ecercítios de escrita de código

//1.

// const nome = prompt("qual o seu nome?")
// const email = prompt("qual o seu email?")
// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//2.

// let listaComidas = ["macarrão", "lazanha", "bife acebolado", "Strogonoff", "Hambúrguer"]
// console.log(listaComidas)
// console.log("Essas são as minhas comidas preferidas: ", listaComidas)
// const novaComida = prompt("diga uma comida que você goste")
// const novaLista = listaComidas.replaceAll("lazanha", "batata")
// console.log(novaLista)

//3.

let listaDeTarefas = []
const listaUsuario1 = prompt("fale uma tarefa que você precisa realizar")
const listaUsuario2 = prompt("fale outra tarefa que você precisa realizar")
const listaUsuario3 = prompt("fale só mais uma tarefa que você precisa realizar")
listaDeTarefas.push(listaUsuario1)
listaDeTarefas.push(listaUsuario2)
listaDeTarefas.push(listaUsuario3)
console.log(listaDeTarefas)
const itemRealizado = Number(prompt("insira um indice de 0 a 2 referente ao item da lista que voce completou"))
listaDeTarefas.splice(itemRealizado, 1)
console.log(listaDeTarefas)