//EXERCICIOS DOM
// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img');
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]');
// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]');
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Descricao = document.querySelector('.animais-descricao h2');
// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
//console.log(ultimoP[--ultimoP.length]);
