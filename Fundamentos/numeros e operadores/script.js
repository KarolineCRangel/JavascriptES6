//NÚMEROS E OPERADORES

var num1 = 28;
var num2 = 2.5;
var num3 = 2e4;//2 com uma sequencia de 4 zeros.

console.log(num1, num2, num3);

//operadores matemáticos
var soma = 10+15;
var sub = 15-5;
var mult = 60*2;
var div = 56/2;
var modulo = 59%3;

//operadores de atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


//string e number

var numero = 30;
var peso = 'kg';
var juntaTudo = numero + peso;

console.log(juntaTudo);
console.log(typeof juntaTudo);// vira uma string

//string tbm realiza divisão
var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));
console.log(testeNaN);

//incremento
var j = 1;
console.log(j);
console.log(++j);
console.log(--j);

var idade = '28';
var somaIdade = 5;

console.log(+idade + somaIdade);//transforma s string em numero

//EXERCÍCIOS

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
//35

// Crie duas expressões que retornem NaN
var a = '30kg';
var b = 2;
console.log(a/b);

var c = 'teste';
console.log(c-b);

// Somar a string '200' com o número 50 e retornar 250
var num5 = '200';
var num6 = 50;
var total = +num5 + num6; 
console.log(total)
// Incremente o número 5 e retorne o seu valor incrementado
var i = 5;
console.log(++i);

// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
 // NaN (Not a Number)
console.log(peso);
console.log(typeof peso);