// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("qual a altura do retângulo?"))
  const largura = Number(prompt("qual a largura do retângulo?")) 
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("em que ano estamos?"))
  const anoNascimento = Number(prompt("em que ano você nasceu?"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculo = peso / (altura * altura)
  return calculo
}
calculaIMC(prompt("peso"), prompt(altura))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("fala teu nome ae!")
  const idade = prompt("fala tua idade ae!")
  const email = prompt("fala teu email ae!")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("fala sua primeira cor favorita")
  const cor2 = prompt("fala sua segunda cor favorita")
  const cor3 = prompt("fala sua terceira cor favorita")
  const lista = [cor1, cor2, cor3]
  console.log(lista)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const fraseAlterada = string
  return fraseAlterada.toUpperCase()
}
const frase = prompt("fala ae fiote")
retornaStringEmMaiuscula(frase)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculo = custo / valorIngresso
  return calculo
}
const custo = Number(prompt("custo"))
const valorDeCadaIngresso = Number(prompt("valor de cada ingresso"))
calculaIngressosEspetaculo(custo, valorDeCadaIngresso)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
   const tamanhoString1 = string1.length
   const tamanhoString2 = string2.length
  const comparacao = tamanhoString1 == tamanhoString2
  return comparacao// 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[array.length - 1]
  return primeiroElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const arrayPrimeiroElemento = array[0]
array[0] = array[array.length - 1]
array[array.length - 1] = arrayPrimeiroElemento
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const primeiraString = string1.toUpperCase()
const segundaString = string2.toUpperCase()
const resultado = primeiraString == segundaString
return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}