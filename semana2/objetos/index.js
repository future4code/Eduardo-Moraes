//1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])// Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1])// Virginia Cavendish
// console.log(filme.transmissoesHoje[2])// Globo 14h

//2.

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//a)
// console.log(cachorro)
    // nome: "Juca", 
    // idade: 3, 
    // raca: "SRD"
// console.log(gato)
    // nome: "Juba", 
    // idade: 3, 
    // raca: "SRD"
// console.log(tartaruga)
    // nome: "Jubo", 
    // idade: 3, 
    // raca: "SRD"

//b)copia os elementos de um objeto e oa coloca no começo do novo objeto

//3.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) será impresso o valor false e em seguida undefined
// b) primeiro será impresso o false pois isso é o que está definido no objeto
// e segundo será impresso undefined pois você está criando uma nova característica no objeto

//Exercícios de escrita de código
//a)
// const pessoa = {
//    nome: "Eduardo", 
//    apelidos: ["Edu", " Dudu", " Duds"]
// }
// function frase(nome, apelidos){
//     const nomeObj = nome
//     const apelidosObj = apelidos
//     console.log(`Eu sou ${nomeObj} mas pode me chamar de ${apelidosObj}`)
// }
// frase(pessoa.nome, pessoa.apelidos)
// //b)
// const pessoaNovoApelido = {
//     ...pessoa,
//     apelidos: ["Duduardo", "Dudsmoney", "Duardo"]
// }
// function frase2(nome, apelidos){
//     const nomeObj = nome
//     const apelidosObj = apelidos
//     console.log(`Eu sou ${nomeObj} mas pode me chamar de ${apelidosObj}`)
// }
// frase2(pessoaNovoApelido.nome, pessoaNovoApelido.apelidos)

//2.

    //a)

// const objeto1 = {
//     nome: "Eduardo",
//     idade: 19,
//     profissão: "Estudante"
// }

// const objeto2 = {
//     nome: "Jonathan",
//     idade: 26,
//     profissão: "marceneiro"
// }
    //b)
// function lista(objeto1, objeto2) {
//     console.log([objeto1.nome, objeto1.nome.length, objeto1.idade,
//          objeto1.profissão, objeto1.profissão.length])
//          console.log([objeto2.nome, objeto2.nome.length, objeto2.idade,
//             objeto2.profissão, objeto2.profissão.length])
// }
// lista(objeto1, objeto2)

//3.

let carrinho = []
const fruta1 = {
    nome: "banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "abacaxi",
    disponibilidade: true
}
const fruta3 = {
    nome: "laranja",
    disponibilidade: true
}
function fruta(fruta){
    carrinho.push(fruta)
    console.log(carrinho)
}
fruta(fruta1)
fruta(fruta2)
fruta(fruta3)
