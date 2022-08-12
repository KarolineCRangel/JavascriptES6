//TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Karoline';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ne', 'na'); // 'Karolina'
nome; // 'André'

//NÚMEROS
var altura = 1.8;
//transforma em string
altura.toString(); // '1.8'
//abrevia
altura.toFixed(); // '2' 

//COM FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}

//em string
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

//tamanho
areaQuadrado.length; // 1

// ELEMENTOS DO DOM
var btn = document.querySelector('.btn');
//O querySelector seleciona uma tag ou elemento de dentro do html.

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.
//ex: querySelector, addEventListener...