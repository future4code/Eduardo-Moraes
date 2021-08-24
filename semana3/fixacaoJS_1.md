```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const porcentagemVenda = valorTotalVendas*0.05
  const comissaoPorCarro = qtdeCarrosVendidos*100
  const comissaoTotal = porcentagemVenda + comissaoPorCarro
  const salarioFinal = 2000 + comissaoTotal
  return salarioFinal
}
```