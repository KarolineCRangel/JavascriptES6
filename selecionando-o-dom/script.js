//Selecionando o DOM pelo ID
const animaisSection  = document.getElementById('animais');
console.log(animaisSection);

//Retorna null se nao existe
const naoExiste = document.getElementById('teste');
console.log(naoExiste);

//Selecionando o DOM pela Classe ou pela Tag
const grid = document.getElementsByClassName('grid-section'); //classe
console.log(grid);

const ul = document.getElementsByTagName('ul'); //tag
console.log(ul);

//Seletor Geral Único - querySelector - mais usado
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');

//busca o ultimo item da lista
const ultimoItem = document.querySelector('.animais-lista li:last-child');

/* primeiro link que comeca com https:// */
const linkCSS = document.querySelector('[href^="https://"]');

const primeiroUl = document.querySelector('ul');

// primeiro link interno
const linkInterno = document.querySelector('[href^="#"]');
// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

const animaisImg = document.querySelectorAll('.animais img'); //retorna uma nodeList

// HTLCOLLECTION VS NODELIST
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens (atualiza em tempo real)
console.log(gridSectionNode); // 3 itens (não atualiza em tempo real)

// TMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)