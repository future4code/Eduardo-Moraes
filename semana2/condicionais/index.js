//- **Exercícios de interpretação de código**

    // Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

    // 1. Leia o código abaixo:

    //     ```jsx
        // const respostaDoUsuario = prompt("Digite o número que você quer testar")
        // const numero = Number(respostaDoUsuario)

        // if (numero % 2 === 0) {
        //   console.log("Passou no teste.")
        // } else {
        //   console.log("Não passou no teste.")
        // }
    //     ```

    //     a) Explique o que o código faz. Qual o teste que ele realiza? 
  // Ele verifica se o número é inpar ou par
    //     b) Para que tipos de números ele imprime no console "Passou no teste"? 
          //  para números pares
    //     c) Para que tipos de números a mensagem é "Não passou no teste"? 
          //  para números impares
    // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

       // ```jsx
        // let fruta = prompt("Escolha uma fruta")
        // let preco
        // switch (fruta) {
        //   case "Laranja":
        //     preco = 3.5
        //     break;
        //   case "Maçã":
        //     preco = 2.25
        //     break;
        //   case "Uva":
        //     preco = 0.30
        //     break;
        //   case "Pêra":
        //     preco = 5.5
        //     break; // BREAK PARA O ITEM c.
        //   default:
        //     preco = 5
        //     break;
        // }
        // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
       // ```

        // a) Para que serve o código acima?
        //     serve para precificar frutas
        // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
        //     O preço da fruta maçã é R$ 2.25
        // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        //     O preço da fruta Pêra é R$ 5 (isso acontece pois se não colocar o break a condição não para de executar)
    // 3. Leia o código abaixo:

    //     ```jsx
        // const numero = Number(prompt("Digite o primeiro número."))

        // if(numero > 0) {
        //   console.log("Esse número passou no teste")
        // 	let mensagem = "Essa mensagem é secreta!!!"
        // }

        // console.log(mensagem)
    //     ```

    //     a) O que a primeira linha está fazendo?
          //  está mandando um prompt para o usuário e colocando ele como um número dentro de uma variável
    //     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
          //  se o numero for 10 vai imprimir a mensagem "Esse número passou no teste" se for -10 não vai imprimir nada
    //     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
          //  tem um erro pois o console.log(mensagem) não tem escopo sobre a variável mensagem, já que ela esta dentro de uma função


//  - **Exercícios de escrita de código**
//  1. 
// function verificadorDeIdade(){
//   const idadeUsuario = Number(prompt('qual sua idade?'))
//   if (idadeUsuario >= 18){
//     console.log("Você pode dirigir")
//   }else{
//     console.log("Você não pode dirigir")
//   }
// }
//   verificadorDeIdade()
//2.
// function verificadorDeTurno(){
//   const turnoUsuario = prompt("Escreva em qual turno você está usando M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
//   if (turnoUsuario === "M"){
//     console.log("Bom dia!")
//   }else if (turnoUsuario === "V"){
//     console.log("Boa tarde!")
//   } else if(turnoUsuario === "N"){
//     console.log("Boa noite!")
//   }else{
//     window.alert("verifique os dados e tente novamente")
//   }
// }
// verificadorDeTurno()
//3.
// function verificadorDeTurno(){
//   const turnoUsuario = prompt("Escreva em qual turno você está usando M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
//   switch (turnoUsuario){
//    case "M":
//       console.log("Bom dia!")
//       break
//    case "V":
//       console.log("Boa tarde!")
//       break
//    case "N":
//       console.log("Boa noite!")
//       break
//     default:
//       window.alert("verifique os dados e tente novamente")
//   }
// }
// verificadorDeTurno()
//4.
// function irAoCinema(genero, ingresso){
//   if (genero === "fantasia" && ingresso < 15){
//     console.log("Bom filme!")
//   }else {
//     console.log("Escolha outro filme :(")
//   }

// }
// const genero = prompt("qual é o gênero do filme?").toLowerCase().trim()
// const ingresso = Number(prompt("qual o preço do ingresso?"))
// irAoCinema(genero, ingresso)