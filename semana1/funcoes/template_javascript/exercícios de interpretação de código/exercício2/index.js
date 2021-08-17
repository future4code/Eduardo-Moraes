let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a) vai peguar um texto que o usuário escrever no prompt,
//deixar em minúsculo e pesquisa a palavra cenoura nele
//e manda um true ou false pro console

//b) I. true
//   II. true
//   III. true