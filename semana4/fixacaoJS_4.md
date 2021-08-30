```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesQueONumeroAparece = 0
  let respostaFinal
  for(let numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
      vezesQueONumeroAparece += 1
    }
  }
  if(vezesQueONumeroAparece > 0){
    respostaFinal = `O número ${numeroEscolhido} aparece ${vezesQueONumeroAparece}x`
  }else{
    respostaFinal = 'Número não encontrado'
  }
  return respostaFinal
}
```