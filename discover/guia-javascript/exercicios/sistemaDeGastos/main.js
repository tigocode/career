/* 
  -> Sistema de gastos Familiar

  Crie um objeto que possuirá 2 propriedades, ambas do tipo 
  Array:
    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar se a familia  está com saldo positivo ou negativo, seguido o valor do saldo.
   
*/
let family = {
  receitas: [1687, 3205.46],
  despesas: [600, 772.8, 297.43, 270.43, 1010, 1300, 200, 365, 600, 100, 80,160]
} 

function sum(array) {
  let total = 0
  
  for(let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const totalReceitas = sum(family.receitas)
  const totalDespesas = sum(family.despesas)

  const totalEnd = totalReceitas - totalDespesas
  const buyer = totalEnd >= 0

  const balanceText = 'Negativo'

  if(buyer) {
    balanceText = 'Positivo'
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${totalEnd.toFixed(2)}`)
}

calculateBalance()