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

    if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){
      let usuario = []
      let computador = []
       let distribuirCarta = true
       while (distribuirCarta){
          usuario.push(comprarCarta())
          usuario.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
          if (usuario[0].valor + usuario[1].valor === 22 || computador[0].valor + computador[1].valor === 22) {
                usuario = []
                computador = []
          } else {
             distribuirCarta = false
          }
       }
       let comprandoCartas = true
       while(comprandoCartas === true){
          let textos = ""
          let pontos = 0
          for (let carta of usuario){
             textos += carta.texto
             pontos += carta.valor
          }
          if (pontos > 21){
             comprandoCartas = false
          } else {
             let mensagemPrompt = confirm(
                `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
                "\n"+ 
                "Deseja comprar mais uma carta?"
             )
             if (mensagemPrompt){
                usuario.push(comprarCarta())
             } else {
                comprandoCartas = false
             }
          }
       }

       let pontosComputador = 0
       let pontosUsuario = 0
       let textosComputador = ""
       let textosUsuario = ""
       for (let carta of computador){
         pontosComputador += carta.valor
         textosComputador += carta.texto + " "
       }
       for (let carta of usuario){
         pontosUsuario += carta.valor
         textosUsuario += carta.texto + " "
       }

       if (pontosUsuario <= 21){
         while (pontosComputador < pontosUsuario && pontosComputador <= 21){
            computador.push(comprarCarta())
            pontosComputador = 0
            textosComputador = ""
            for (let carta of computador){
              pontosComputador += carta.valor
              textosComputador += carta.texto + " "
            }
         }
       }
       let resultado = ""
       if (pontosUsuario > pontosComputador && pontosUsuario < 22){
          resultado = "O usuário ganhou!"
       } else if (pontosComputador > pontosUsuario && pontosComputador < 22){
          resultado = "O computador ganhou!"
       } else if (pontosComputador > 21 && pontosUsuario < 22){
          resultado = "O usuário ganhou!"
       } else if (pontosUsuario > 21 && pontosComputador < 22){
          resultado = "O computador ganhou!"
       } else {
          resultado = "Empate!"
       }
       alert(
          `Usuario - Cartas: ${textosUsuario} - Pontuação: ${pontosUsuario}` + 
          "\n" + 
          `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
          "\n" + 
          resultado
       )
    } else {
       alert("O jogo acabou.")
   }