// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); - Erro, carro is not defined

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
//ex: carro = 'Fusca' (sem palavra chave var, let ou const)


// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Kombi';//vaza o bloco
 
function mostrarCarro() {
  var frase = `Meu carro é uma ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

// ESCOPO DE BLOCO
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
//const e let respeitam o escopo de bloco
if(true) {
  const carro = 'Opala';
  console.log(carro);
}
console.log(carro); // Kombi - pois está fora do bloco e cai no var

// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); - erro ano is not defined pois está fora do bloco

// Com o let evitamos que o número vaze.
for(let i = 1; i < 5; i++) {
  console.log(`Número ${i}`);
}
//console.log(i); - i is not defined, pois com o let a variável não funciona fora do bloco


// O Const mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const mes = 'Dezembro';
//mes = 'Janeiro'; - erro, tentou modificar o valor
//const semana; - erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona, pois é um objeto
//data = 'Janeiro'; - erro

