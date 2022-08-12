//OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
  nome: "Karoline",
  idade: 28,
  profissao: "Desenvolvedora web",
  possuiFaculdade: true,
};

console.log(pessoa.nome); // 'Karoline'
console.log(pessoa.possuiFaculdade); // true

// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

//Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}

// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//CRIAR UM OBJETO 
var moto = {};

console.log(typeof moto);

// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

//Adicionar propriedades e métodos

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';//foi adicionado ao objeto menu

// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}

//hasOwnProperty é um metodo herdado de object que verifica se a propriedade liestada se encontra no objeto que foi criado
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
