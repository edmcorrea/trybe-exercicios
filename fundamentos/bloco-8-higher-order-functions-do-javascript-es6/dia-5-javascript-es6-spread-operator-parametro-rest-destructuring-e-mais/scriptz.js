// ###################### spread #########################
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'acerola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['ametista', 'pepita', 'quartz'];

const fruitSalad = (fruit, additional) => {
  const mix = [...fruit, ...additional];
  return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));

// ################3 Object Destructuring #####################

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name, age ,nationality} = user;
const {profession, squad ,squadInitials} = jobInfos;

console.log(`Hi, my name is ${name}, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic`);