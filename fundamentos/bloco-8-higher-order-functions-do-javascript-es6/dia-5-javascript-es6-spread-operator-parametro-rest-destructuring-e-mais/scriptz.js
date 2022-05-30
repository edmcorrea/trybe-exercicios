// ###################### spread #########################
// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['morango', 'laranja', 'acerola'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['ametista', 'pepita', 'quartz'];

// const fruitSalad = (fruit, additional) => {
//   const mix = [...fruit, ...additional];
//   return mix;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// ################3 Object Destructuring #####################

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const {name, age , nationality} = user;
// const {profession, squad ,squadInitials} = jobInfos;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);


// ################ Array Destructuring #####################
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// [str, funcao] = saudacoes;

// saudacoes[1](saudacoes[0]); // Olá
// funcao(str);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // aSolução sem a correção

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida); // solução corrigida


// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;
// console.log(numerosPares); // [6, 8, 10, 12];


// ################4 Default Destructuring #####################
let person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
// person.nationality = 'Brazilian';
// const { nationality = 'Brazilian' } = person;
console.log(nationality, person); //NÃO FAZ SNETIDO PRA MIM A LINHA ACIMA SENDO QUE O OBJETO NÃO CONTEM O ELEMENTO MENCIONADO

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
console.log(position2d); // //NÃO FAZ SNETIDO PRA MIM A LINHA ACIMA SENDO QUE O OBJETO NÃO CONTEM O ELEMENTO MENCIONADO


// ################4 Object Property Shorthand #####################

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// ################4 Default Parameters #####################

const multiply = (number, value = 1) => {
  return number*value;
};

console.log(multiply(8));