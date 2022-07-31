/* 
  -> Celsius em Fahrenheit

  Crie uma um função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra

  C = (F - 32) * 5/9
  F = C * 9/5 + 32
   
*/

function temperatureConverter(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não indentificado!')
  }

  let upDateDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  if(celsiusExists) {
    upDateDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 9/5 + 32
    degreeSign = 'F'
  }

  return formula(upDateDegree) + degreeSign
}

try {
  console.log(temperatureConverter('50F'))
  console.log(temperatureConverter('10C'))
  console.log(temperatureConverter('50X'))
} catch (error) {
  console.log(error.message)
}