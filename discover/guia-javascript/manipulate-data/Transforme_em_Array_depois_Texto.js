/* 
  Manipulando Strings e Números
    -> Separe um texto  que contem espaços, em um novo array onde cada texto é um posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _.
*/
 
let string = "Eu amo programação e desejo viver disso!"
let myArray = string.split(" ")
console.log(myArray)
/* 
  -> No código acima estamos ussando a funcionalidade split() para transformar o texto da variavel string em um array e na sequencia salvando na variavel myArray.

  Obs: Com o split() é possível definir um delimitador que é usando para separar o texto e depois transforma-lo em array.
*/
let transformeMyArray = myArray.join("_")
console.log(transformeMyArray)

/* 
  -> No código acima estamos ussando a funcionalidade join() para transformar o array da variavel myArray novamente em um texto.

  Obs: Com o join() é possível definir um delimitador que é usando para unir as posições do array myArray em um texto.
*/