/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 console.log("Boas vindas ao jogador de Blackjack")
 if (confirm("Quer iniciar uma nova rodada?")){
    const cartaUmUsuario = comprarCarta()
   
    const cartaDoisUsuario = comprarCarta()
   
    console.log(`Usuário - cartas: ${cartaUmUsuario.texto +' '+ cartaDoisUsuario.texto} - pontuação: ${cartaUmUsuario.valor + cartaDoisUsuario.valor}`)

    const cartaUmComputador = comprarCarta()
   
    const cartaDoisComputador = comprarCarta()
   
    console.log(`Computador - cartas: ${cartaUmComputador.texto +' '+ cartaDoisComputador.texto} - pontuação: ${cartaUmComputador.valor + cartaDoisComputador.valor}`)
    if (cartaUmUsuario.valor + cartaDoisUsuario.valor > cartaUmComputador.valor + cartaDoisComputador.valor){
       console.log("O usuário venceu!")
    }else if (cartaUmUsuario.valor + cartaDoisUsuario.valor < cartaUmComputador.valor + cartaDoisComputador.valor){
       console.log("O computador venceu!")
    }else{
       console.log("Empate!")
    }
 }else{
    console.log("O jogo acabou")
 }