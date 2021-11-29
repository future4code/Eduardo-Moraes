console.log("exercicio 2")
const tarefa = process.argv.slice(2)
const resultado =(operador, num1, num2)=>{
    switch (operador) {
        case "add":
           console.log("\033[0;32m o resultado da soma é: ", num1 + num2)
            break;
        case "sub":
           console.log("\033[0;32m o resultado da subtração é: ", num1 - num2)
            break;
        case "mult":
           console.log("\033[0;32m o resultado da multiplicação é: ", num1 * num2)
            break;
        case "div":
           console.log("\033[0;32m o resultado da divisão é: ", num1 / num2)
            break;
    
        default:
            console.log("\033[31m algo deu errado :(")
            break;
    }
}
console.log(resultado(tarefa[0], Number(tarefa[1]), Number(tarefa[2])))
