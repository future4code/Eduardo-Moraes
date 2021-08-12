//a)
function mensagem(){
console.log("Eu sou Eduardo, tenho 20 anos, moro em Brasília e sou estudante.")
}
mensagem()
//b) 
function mensagemComParametro(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
const nome = prompt("qual seu nome?")
const idade = prompt("qual sua idade?")
const cidade = prompt("qual a sua cidade?")
const profissao = prompt("qual a sua profissão?")
mensagemComParametro(nome, idade, cidade, profissao)