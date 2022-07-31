/* 
Function Hoisting - Elevação da função

O que isso significa: Quando uma function é executada antes do seu bloco de código, o javascript faz a elevação do código para que a function seja executada, veja o exemplo abaixo: 

*/

SaveMyName();

function SaveMyName() {
  console.log('TigoCode')
}