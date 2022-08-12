//VARIÁVEIS
var nome = 'Karoline',
    idade = 28,
    comidaFavorita;

comidaFavorita = 'Parmegiana'
//consele.log() é usado para printar no console.
console.log(nome, idade, comidaFavorita);



// DIFERENÇA ENTRE VAR, LET E CONST
//Hoisting - move as variáveis para o topo do escopo antes da execução do código.

//var pode ser declarada novamente dentro do escopo
let time,
    torcida,
    jogador,
    arbitro,
    narrador;


//let não pode ser declarada mais de uma vez, mas pode ser atualizada. é uma variáel de bloco, portando só funciona dentro do bloco proposto.
let estado = 'Rio de Janeiro';

//Const não pode ser declaradas mais de uma vez e nem atualizadas
const pi = 1.14;

console.log(time, estado, pi);

