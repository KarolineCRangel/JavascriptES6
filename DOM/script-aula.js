// DOCUMENT OBJECT MODEL (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

//window.innerHeight; - retorna a altura do browser

// WINDOW E DOCUMENT
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); - tbm funciona
//document.body; - Retorna o body

const h1Select = document.querySelector('h1'); // Seleciona o primeiro h1 e armazena em uma variável const.
const h1Classes = h1Select.classList;//armazena a classe do elemento h1

function callbackH1(){
    console.log('clicou em: ', h1Select.innerText);
}

h1Select.addEventListener('click', callbackH1)