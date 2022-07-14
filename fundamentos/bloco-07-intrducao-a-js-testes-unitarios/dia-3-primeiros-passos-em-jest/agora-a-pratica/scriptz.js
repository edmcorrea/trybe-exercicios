// 🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = (arr, item) => {
  newArr = [];
  for (let i = 0; i < arr.length; i+=1) {
    (arr[i] !== item) ? newArr.push(arr[i]) : null;
  }
  return newArr;
}
// console.log((myRemove([1, 2, 3, 4], 3)));

// 🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// ####################3 PLAYGROUND FUNCTION ####################

const encode = frase => {
  let newFrase = "";
  for (let i = 0; i < frase.length; i += 1) {
    (frase[i] === "a") ? newFrase += "1" 
    : (frase[i] === "e") ? newFrase += "2"
      : (frase[i] === "i") ? newFrase += "3" 
        : (frase[i] === "o") ? newFrase += "4" 
          : (frase[i] === "u") ? newFrase += "5" 
            : newFrase += frase[i];
  }
  return newFrase;
}

console.log(encode('aeiou').length);

module.exports = {myRemove, myFizzBuzz, encode};

