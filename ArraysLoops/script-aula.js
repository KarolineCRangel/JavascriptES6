//ARRAY - vetores [utiliza colchetes]

var videoGames = ['xbox', 'playstation', 'switch'];

videoGames[0];//xbox
videoGames[1];//playstation
videoGames[2];//switch

//ALGUNS METODOS HERDADOS DE ARRAY
//videoGames.pop(); - remove o ultimo elemento da array e retorna ele
//videoGames.push(); - adiciona um elemento ao final do array
//videoGames.lenght; - retorna o tamanho da array

//LOOPS

//FOR
for(let i = 1 ; i < 6 ; i++){
  console.log(i);
}

//WHILE
let j = 1;
while(j<=10){
  console.log(j);
  j+=5;
}

//UTILIZANDO FOR COM ARRAYS
for(let item = 0 ; item < videoGames.length ; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'playstation'){
    break;//pára o loop
  }
}

// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var frutas = ['Banana', 'Maçã', 'Uva', 'Pêra', 'Abacaxi'];
frutas.forEach(function(fruta, index) {//passa por todas as posições do array dinamicamente.
  console.log(fruta, index);
});
// o forEach pode ter como argumento respectivamente: valor, index(posição), array completa
// O argumento item será atribuído dinamicamente
