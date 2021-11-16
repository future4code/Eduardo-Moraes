// A) através de process.argv
// console.log("exercicío 1 b")
// const tarefa = process.argv.slice(2)
// const frase = `Olá, ${tarefa[0]}! você tem ${tarefa[1]} anos.`
// console.log(frase)


console.log("exercicío 1 c")
const tarefa = process.argv.slice(2)
const idadeEmSeteAnos = Number(tarefa[1]) + 7
const frase = `Olá, ${tarefa[0]}! você tem ${tarefa[1]} anos. Em sete anos você terá ${idadeEmSeteAnos} `
console.log("\033[34m", frase)
