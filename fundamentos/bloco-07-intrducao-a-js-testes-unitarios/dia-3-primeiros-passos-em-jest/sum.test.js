const sum = (a, b) => a + b;

//para trazer uma função de outra pasta coloca =>  module.exports = sum; <= na pasta a ser testada 
//e na pasta de onde rola o teste coloca o => const sum = require('./script'); <=

//para trazer +de 1 funcao função de outra pasta coloca =>  module.exports = {sum, outraFuncao}; <= na pasta a ser testada
//na pasta de onde tem mais de um teste coloca o => const {sum, outraFuncao} = require('./script'); <=

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});