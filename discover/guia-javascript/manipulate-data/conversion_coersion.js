/* 
  Type conversion (Typecasting) vs Type coersion
    -> Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5)
/* 
 -> No código acima está acontecendo um coersion(coerção) que o javascript força o tipo Number no console.log a ser convertido para o tipo String.
*/

console.log(Number('9') + 5)
/* 
 -> No código acima está acontecendo um Conversion(conversão) que forçamos manualmente o o tipo sSring no console.log a ser convertido para o tipo Number implementando a função Number().
*/