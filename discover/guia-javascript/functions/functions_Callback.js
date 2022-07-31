/* 
Callback function - Função de retorno de chamada

O que isso significa: A função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Conforme o exemplo abaixo:

*/

function SaveMyName(name) {
  console.log(name);
}

SaveMyName(
  () => {
    console.log('Veja uma explicação mais clara sobre callback no link: https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function')
  }
);