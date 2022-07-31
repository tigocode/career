/* 
  Manipulando Strings e Números
    -> Transformar um número quebrado com 2 casas decimais e trocar o ponto por virgula.
  */
 
  let number = 325.542698852123345
  console.log(number.toFixed(2).replace('.', ','))
/* 
 -> No código acima estamos ussando a funcionalidade toFixed() para definir a quantidade de casa decimais para número da variavel number e em seguida usamo a funcionalidade replace() para substituir o ponto (.) para virgula (,).
*/
