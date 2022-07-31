/* 
Functions construtoras - constructor

O que isso significa: A function construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

Conforme o exemplo abaixo:

*/

function Person() {
  this.name = 'Tiago Dantas'
  this.walk = function() {
    return this.name + ' está andando'
  }
}
const TigoCode = new Person();

console.log(TigoCode.walk());