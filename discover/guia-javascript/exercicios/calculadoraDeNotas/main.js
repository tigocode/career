/* 
  -> Transformar notas escolares

  Crie um algoritmo que transforme as notas do sistema númerico para um sistema de notas em caracteres tipo A B C.

  * de 90 para cima == A
  * entre 80 - 89 == B
  * entre 70 - 79 == C
  * entre 60 - 69 == D
  * menor que 60 == F
   
*/

function getNote(note) {
  let noteA = note >= 90
  let noteB = note >= 80 && note <= 89
  let noteC = note >= 70 && note <= 79
  let noteD = note >= 60 && note <= 69
  let noteF = note < 60

  let notaFinal

  if(noteA) {
    notaFinal = 'Nota A'
  }else if(noteB) {
    notaFinal = 'Nota B'
  }else if(noteC) {
    notaFinal = 'Nota C'
  }else if(noteD) {
    notaFinal = 'Nota D'
  }else if(noteF) {
    notaFinal = 'Nota F'
  } else {
    notaFinal = 'Nota Inválida'
  }

  return notaFinal
}


console.log(getNote(1))