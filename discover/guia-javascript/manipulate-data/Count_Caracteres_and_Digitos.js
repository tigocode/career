/* 
  Manipulando Strings e Números
    -> Contar quantos caracteres tem uma palavra e quantos digitos tem um número   
  */
 
  let string = 'Eu amo programação e desejo viver disso!'
  console.log(string.length)
/* 
 -> No código acima estamos usando a funcionalidade length() para contarmos a quantidade de caracateres tem o texto da variavel string.
*/

let number = 196584523
console.log(String(number).length)

/* 
 -> No código acima estamos ussando a funcionalidade length() para contarmos a quantidade de digitos tem o número da variavel number.

 Obs: Não é possível contar a quantidade de digitos existe em um número, mas quando convertido para uma string usando a função String na variavel number é possível obter o resultado desejado.
*/