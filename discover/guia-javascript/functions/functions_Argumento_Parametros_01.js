// Argumento e  Parametros

/* 
A function abaixo pode ser chamada de:

 => function expression
 => function anonymous

O que vai informado dentro do parenteses é o Parametros(parameters)
*/

const sum = function(number1, number2) {
  let total = number1 + number2;

  return total;
}

let number1 = 34;
let number2 = 51;

console.log(`O numero 1 é: ${number1}`);
console.log(`O numero 2 é: ${number2}`);
console.log(`A soma é: ${sum(number1, number2)}`);

/* 
Os numeros informados dentro da function são chamados de Argumento - arguments
*/