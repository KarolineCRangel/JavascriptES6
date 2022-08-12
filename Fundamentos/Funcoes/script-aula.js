//FUNÇÕES

//bloco de cófio que pode ser exeutado e reutilizado
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

//calculando o IMC
function imc(peso, altura) {
  const imc = peso / altura ** 2; //expoente 2
  return imc;
}

console.log(imc(66, 1.67).toFixed(2));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "eu gosto da cor " + cor;
  }
}

console.log(corFavorita("verde"));

//Funções também podem ser argumentos

addEventListener("click", function () {
  console.log("oi");
});

//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
//cuidado ao retornar vários tipos de dados em uma funçao

//ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises); // erro, totalPaises não definido pois está fora do escopo.

// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.8); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}