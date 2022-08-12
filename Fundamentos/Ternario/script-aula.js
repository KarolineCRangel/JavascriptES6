// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

var idade = 15;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Não Pode beber

// condição ? true : false

//IF ABREVIADO - se tiver só uma linha de código não precisa de chaves
var possuiFaculdade = true;
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');
