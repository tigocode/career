/* 
Escopo de uma function
*/

let subject = 'create video';

function createThink(subject) {
  subject = 'study'
  return subject;
}

console.log(subject);
console.log(createThink());
console.log('Fim do código 1')

/* 
No primeiro console.log imprimimos o conteudo da variavel subject declarada no topo do código

No segundo console.log imprimimos o conteúdo do parametro dentro da function createThink(subject) que sofreu alteração.

Dica importante se a function executada primeiro que a variavel subject1 e o parametro subject1 não já seja declarado na function, a variavel subject1 do topo sofrera alteração conforme código abaixo.

*/

let subject1 = 'create live';

function createThink1(subject1) {
  subject1 = 'annotation'
  return subject1;
}

console.log('Inicio do código 2')
console.log(createThink1());
console.log(subject1);