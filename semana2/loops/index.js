//   **Exercícios de interpretação de código**


//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

       
        // let valor = 0
        // for(let i = 0; i < 5; i++) {
        //   valor += i
        // }
        // console.log(valor)// vai imprimir o valor de 10
        

   // 2. Leia o código abaixo:

       
    //     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    //     for (let numero of lista) {
    //       if (numero > 18) {
    //     		console.log(numero)
    //     	}
    //     }
        

    //     a) O que vai ser impresso no console? 
    //         // os numeros 19, 21, 23, 25, 27 e 30
    //     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    //         // não, ele mostra os elementos da lista, não os índices dos elementos
    // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
        //vai aparecer 4 linhas de * a primeira com 1, a segunda com, a terceira com 3 e a quarta com 4
       
        // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        // let quantidadeAtual = 0
        // while(quantidadeAtual < quantidadeTotal){
        //   let linha = ""
        //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        //     linha += "*"
        //   }
        //   console.log(linha)
        //   quantidadeAtual++
        // }
//Exercícios de escrita de código
//1.
// const numeroDeAnimais = Number(prompt("quantos animais de estimação você tem?"))
// const listanomes = []
// if (numeroDeAnimais === 0){
//     console.log("que pena, você pode adotar um pet")
// }else{
//     for (let i = 0; i < numeroDeAnimais; i++){
//         const nomeDoPet = prompt("fala o nome do pet")
        
//         listanomes.push(nomeDoPet)
       
//     }
//     console.log(listanomes)
// }
//2.
// const arrayOriginal = [1,2,3,4,5,6]
// //a)
// for(lerArray of arrayOriginal){
//     console.log(lerArray)
// }
// //b)
// for(lerArray of arrayOriginal){
//     console.log(lerArray / 10)
// }
// //c)
// const arrayPar = []
// for(lerArray of arrayOriginal){
//    if (lerArray % 2 == 0){
//        arrayPar.push(lerArray)
//    }
// }console.log(arrayPar)
// //d)
// const arrayString = []
// let i =0
// for(array1 of arrayOriginal){
//     arrayString.push(`O elementodo índice ${i} é: ${array1}`)
//     i += 1
// }
// console.log(arrayString)
//e)
// let numerosFinais = []
// for(maiorMenorNumero of arrayOriginal){
//     let numeroAtual = 0
//     if(maiorMenorNumero > numeroAtual){
//         let maiorNumero = []
//         maiorNumero.push(maior)
//         return maiorNumero
//     }
//     numerosFinais.push()
// }