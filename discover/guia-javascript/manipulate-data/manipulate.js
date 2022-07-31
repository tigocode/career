/* 
  Manipulando Array
*/
 
let techs = ['html', 'css', 'js']

/* 
  -> Adicionar um item no fim do array.
*/
techs.push('nodejs')

/* 
  -> Adicionar um item no começo do array.
*/
techs.unshift('C#')

/* 
  -> Remover um item no fim do array.
*/
techs.pop()

/* 
  -> Remover um item no começo do array.
*/
techs.shift()

/* 
  -> Pegar somente alguns elementos do array.
*/
console.log(techs.slice(2, 3))

/* 
  -> Remover 1 ou mais items em qualquer posição do array.
*/
techs.splice(0,2)

/* 
  -> Encontrar a posição de um elemento no array.
*/
let index = techs.indexOf('css')
techs.splice(index, 1)


console.log(techs)