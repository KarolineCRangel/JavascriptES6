//TIPOS DE DADOS
var nome = "Karoline"; //string
var idade = 28; //number
var dorDeCabeca = true; //Boolean
var comida = null; //null
var ingrediente; //undefined
var simbolo = Symbol(); //symbol
var novoObjeto = {}; //object

//verificar o tipo de variável
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof dorDeCabeca);
console.log(typeof comida); //retorna object
console.log(typeof ingrediente);
console.log(typeof simbolo);
console.log(typeof novoObjeto);

//STRINGS
var sobrenome = " Carregal";
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

//frases concatenadas

//soma
console.log("Olá! Meu nome é " + nome + " e eu tenho " + idade + " anos.");

//Template string - passa as variáveis ou expressões dentro de ${}
var gols = 1000;
//sem template string
var frase1 = "Romário fez " + gols + " gols.";
//com template string
var frase2 = `Romário fez ${gols * 2} gols.`;

console.log(frase1);
console.log(frase2);
