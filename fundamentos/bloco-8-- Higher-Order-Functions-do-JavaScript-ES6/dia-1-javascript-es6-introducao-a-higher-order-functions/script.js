
// ################## NÃO ENTENDI ###############
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}
const initialSum = sumFixAmount(15)
// console.log(initialSum(5));

//EXEMPLO 2
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, (number) => {
  if (number % 2 === 0) {
    // console.log(number, 'is even');
  }
});

const numberGenerator = () => {
  return Math.random() * 100;
}

// console.log(numberGenerator());

// ############################## Para fixar ####################
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const acordar = () => 'Acordando !';
const cafe = () => 'Bora tomar café';
const dormir = () => 'Partiu dormir!!';
const doingThings = (func) => func;
// console.log(doingThings(acordar()));


//#################### AGORA A PRATICA #######################
//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const generatorEmployees = (fullName) => {
  const prefixoEmail = fullName.split(' ').join('').toLowerCase();
  return {fullName, email: `${prefixoEmail}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),    
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

// console.log(newEmployees(generatorEmployees));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteioAleatorio = () => Math.floor(Math.random()*5+1);
const numeroApostado = 1;
const resultadoSorteio = (str, callback) => {
  let resultado = '';  
  if (callback() == str) {
    resultado = "Parabéns você ganhou";
  } else {
    resultado = "Tente novamente";
  }
  return resultado;
}
console.log(resultadoSorteio (numeroApostado, sorteioAleatorio));


//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
  // Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultadoFinal = (corretas, erradas) => corretas-erradas*0.5;  

const checkedAnswer = (arrGabarito, arrRespostasEstudante, callback) => {
  let respostasCorretas = 0;
  let respostasErradas = 0;
  let respostaFinal = 0
  for (let i = 0; i < arrGabarito.length; i+=1) {
    (arrGabarito[i]===arrRespostasEstudante[i] && arrRespostasEstudante != 'N.A')
    ? respostasCorretas += 1
    : respostasErradas += 1;    
  }
  return callback(respostasCorretas, respostasErradas);
}
console.log(checkedAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, resultadoFinal));