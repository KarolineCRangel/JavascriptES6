//CONDICIONAIS

var graduacao = false;

if(graduacao){
    console.log('verdadeiro');
}
else{
    console.log('falso');
}

var nome = 'Karol';

if(nome){
    console.log(nome);
}
else{
    console.log('nome nao existe');
}

//switch verifica de uma variável é igual a um dos valores listados utiizando o case

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


//valores que retornam false em uma expressão booleana

//if(false)
//if(0) ou -0
//if(NaN)
//if(null)
//if(undefined)
//if('') ou "" ou ``

//valores que retornam true em uma expressão booleana

//if(true)
//if(1)
//if(' ')
//if('andre')
//if(-5)
//if({})

//operador de negação !

if(!graduacao){
    console.log('nao possui graduacao');
}

//operador de comparação

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//operador && (e)

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

//operador || (ou)

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

//EXERCÍCIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var karol = 28;
var luan = 29;

if(karol > luan){
    console.log('Karol é mais velha');
}
else if(karol === luan){
    console.log('Karol e Luan têm a mesma idade');
}
else{
    console.log('Luan é mais velho');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);//3 - retorna o ultimo verdadeiro se todos forem true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(china > brasil){
    console.log("China possui mais habitantes que o Brasil");
}
else if(china == brasil){
    console.log("China possui a mesma quantidade de habitantes do Brasil")
}
else{
    console.log("Brasil possui mais habitantes que a China");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
  //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');//Cão - o ultimo verdadeiro
} else {
  console.log('Falso');
}