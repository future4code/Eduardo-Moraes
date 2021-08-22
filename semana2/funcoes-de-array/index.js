//Exercícios de interpretação de código
//1.

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })
    //a) vai imprimir um array com os objetos contendo os nomes e os apelidos das professoras da labenu

  //2.  
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

//  const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//  })

//  console.log(novoArrayB)
//a) vai imprimir um array com apenas os nomes da lista

//3.
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)
//a) vai imprimir um novo array sem o objeto com o apelido 'chijo'

//Exercícios de escrita de código
//1.

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]
//a)
// const nomeDosPets = pets.map((nomes)=>{
//     return nomes.nome
// })
// console.log(nomeDosPets)
//b)
// const listaCachorrosSalsicha = pets.filter((cachorro)=>{
//     return cachorro.raca === "Salsicha"
// })
// console.log(listaCachorrosSalsicha)
//c)
// const discontoParaPoodle = pets.filter((poodle)=>{
//     return poodle.raca === 'Poodle'
 

// })
// const nomeDosPoodles = discontoParaPoodle.map((nomePoodle)=>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle.nome}`
// })
// console.log(nomeDosPoodles)

//2.

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
// const nomeItensLista = produtos.map((nomeProdutos)=>{
//     return nomeProdutos.nome
// })
// console.log(nomeItensLista)
//b)
// const nomeDosProdutosComDesconto = produtos.map((nomeProdutos)=>{
//     return [nomeProdutos.nome, nomeProdutos.preco * 0.95]
// })
// console.log(nomeDosProdutosComDesconto)
//c)
// const apenasBebidas = produtos.filter((bebidas)=>{
//     return bebidas.categoria === "Bebidas"
// })
// console.log(apenasBebidas)
//d)
//  const contemPalavraYpe = produtos.filter((produtosYpe)=>{
//      return produtosYpe.nome.includes("Ypê")
//  })
//  console.log(contemPalavraYpe)
//e)
// const contemPalavraYpe = produtos.filter((produtosYpe)=>{
//     return produtosYpe.nome.includes("Ypê")
// })
// console.log(contemPalavraYpe)

// const nomeComPreco = contemPalavraYpe.map((nomePrecoYpe)=>{
//     return `Compre ${nomePrecoYpe.nome} por ${nomePrecoYpe.preco}`
// })
// console.log(nomeComPreco)