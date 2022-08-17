// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
//menu.classList.add("ativo", "mobile"); // duas classes
//menu.classList.remove("ativo");
//menu.classList.toggle("ativo"); // adiciona/remove a classe
//menu.classList.contains("ativo"); // true ou false
//menu.classList.replace("ativo", "inativo");

if (menu.classList.contains('ativo')){
  menu.classList.add('contemAtivo');
}

// ATTRIBUTES
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// GETATTRIBUTE E SETATTRIBUTE
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // pega o valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // mostra se possui ou nao aquele atributo: true ou false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true ou false se tem algum atributo

// READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector('.animais');

animais1.className; // string com o nome das classes
animais1.className = 'azul'; // substitui completamente a string
animais1.className += ' vermelho'; // adiciona vermelho à string

animais1.attributes = 'class="ativo"'; // não funciona, read-only

// podemos modificar o valor de uma propriedade objeto.propriedade = ''


