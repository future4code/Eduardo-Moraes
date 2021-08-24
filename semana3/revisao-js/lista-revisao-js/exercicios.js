// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        return a-b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = []
  for (let numero of array){
      if (numero % 2 === 0){
        arrayPar.push(numero)
      }
  }
  return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
    for (let numero of array){
        if (numero % 2 === 0){
          arrayPar.push(numero ** 2)
        }
    }
    return arrayPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for (let numero of array){
        if(numero > maiorNumero){
            maiorNumero = numero
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objetoOriginal = {
        maiorNumero: 1,
        maiorDivisivelPorMenor: true,
        diferenca: 1
    }
    let maiorNumero
    let menorNumero
    let maiorDivisivelPorMenor
    if (num1>=num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero = num1
    }
    if(maiorNumero % menorNumero === 0){
        maiorDivisivelPorMenor = true
    }else{
        maiorDivisivelPorMenor = false
    }
    let diferenca = maiorNumero - menorNumero
    let objeto = {
        ...objetoOriginal,
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}