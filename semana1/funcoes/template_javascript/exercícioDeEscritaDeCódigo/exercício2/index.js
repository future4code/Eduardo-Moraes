//a) 
function somaDosNumeros(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado)
    return resultado
}
const numero1 = Number(prompt("fala um número ae!"))
const numero2 = Number(prompt("fala outro número ae!"))
somaDosNumeros(numero1, numero2)
//b)
function comparacaoDosNumeros(num1, num2){
    const resposta = num1 >= num2
    console.log(resposta)
    return resposta
}
const num1 =  Number(prompt("fala um número ae! agora é pra outra coisa"))
const num2 = Number(prompt("fala outro número ae! esse é o último"))
comparacaoDosNumeros(num1, num2)
//c)
function detectaParOuImpar(n){
    const detec = n % 2
    const parImpar = detec == 0
    console.log("seu numero é par?", parImpar)
    return detec
}
const nDoPrompt = Number(prompt("eu sei que eu falei que era o último, mas o que que custa voce falar mais um número, fala ae, só um numerozinho"))
detectaParOuImpar(nDoPrompt)
//d) 
function mensagem(umaMensagem){
const tamanhoDaMensagem = umaMensagem.length
const mensagemEmMinusculo = umaMensagem.toLowerCase
console.log(tamanhoDaMensagem, mensagemEmMinusculo)
}
const mensagemPrompt = prompt("agora fale alguma coisa ae!")
mensagem(mensagemPrompt)