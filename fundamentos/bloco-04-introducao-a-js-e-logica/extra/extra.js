// Desafio 1
function compareTrue(value1, value2) {
  let resultado;
  if (value1 === true && value2 === true) {
    resultado = true;
  } else if (value1 === true && value2 === false) {
    resultado = false;
  } else if (value1 === false && value2 === true) {
    resultado = false;
  } else {
    resultado = false;
  }
  return resultado;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = (base * height) / 2;
  return trianguloArea;
}
// console.log(calcArea(3, 5));

// Desafio 3
function splitSentence(text) {
  let split = text.split(" ");
  return split;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      contador += 1;
    }
  }
  return contador;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return "cat1";
  } else if (distancia1 > distancia2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
// console.log(catAndMouse(5, 1, 9));

// Desafio 8
function fizzBuzz(array) {
  let resultadoFB = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultadoFB.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      resultadoFB.push("fizz");
    } else if (array[i] % 5 === 0) {
      resultadoFB.push("buzz");
    } else {
      resultadoFB.push("bug!");
    }    
  }
  return resultadoFB;
}
// console.log(fizzBuzz([3, 4, 5, 9, 10, 15, 30]));

// Desafio 9
function encode(text) {
  let newText = "";
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === "a"){
      newText += "1";
    } else if (text[i] === "e"){
      newText += "2";
    } else if (text[i] === "i"){
      newText += "3";
    } else if (text[i] === "o"){
      newText += "4";
    } else if (text[i] === "u"){
      newText += "5";
    } else {
      newText += text[i];
    }
  }
  return newText;
}
// console.log(encode("hi there!"));

function decode(newText) {
  let lastText = "";
  for (let i = 0; i < newText.length; i += 1) {
    if (newText[i] === "1"){
      lastText += "a";
    } else if (newText[i] === "2"){
      lastText += "e";
    } else if (newText[i] === "3"){
      lastText += "i";
    } else if (newText[i] === "4"){
      lastText += "o";
    } else if (newText[i] === "5"){
      lastText += "u";
    } else {
      lastText += newText[i];
    }
  }
  return lastText;
}
// decode(encode(newText)); // como faço pra receber o que vem de cima?

// Desafio 10
function techList(arrayList, name) {
  let arrayOrdenados = arrayList.sort(); // ENCONTRADO NO REPOSITORIO MDN
  let arrayObjeto = [];
  for (let i = 0; i < arrayList.length; i += 1) {
    arrayObjeto.push({ tech: arrayOrdenados[i], name: name });
  }
  if (arrayList.length > 0) {
    return arrayObjeto;
  } else {
    return 'Vazio!';
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  let contadorErr = array.length;
  if (contadorErr !== 11) {
    return "Array com tamanho incorreto."; 
  }
  let contador = 0;
  let contadorRepete = 0;
  let maisRepete = array[0];
  for (let ii = 0; ii < array.length; ii += 1) {
    contadorErr +=1;
    for (let iii = 0; iii < array.length; iii += 1) {
      if(array[ii]===array[iii]){
        contador ++;
      }
      if(contador >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    contador = 0;
    if (array[ii] < 0 || array[ii] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }  
  let telefone = "(##) #####-####";
  let newTelefone = ""; 
  for (let i = 0; i < array.length; i += 1) {
    newTelefone = telefone.replace(/#/, array[i]);
    telefone = newTelefone;
  }
  return newTelefone;
  
}
// console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // colocando array em ordem crescente
  function sorts(a, b){return (a - b)}; // solução encontrada na https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores
  data = [lineA, lineB, lineC]
  let crescente = data.sort(sorts);
  // analisando validação de função triângulo
  if (crescente[2]-crescente[1] < crescente[0] || crescente[0]+crescente[1] > crescente[2]) {
    return true;
  }else{
    return false;
  }
}
// console.log(triangleCheck(4, 3, 6));

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g; //Comentários da solução após a function hydrate()
  let number = string.match(regex).map(Number); //Comentários da solução após a function hudrate()
  let soma = 0;
  for (let i = 0; i < number.length; i += 1) {
    soma += number[i];    
  }
  if (soma === 1){
    return soma + " copo de água";
  }else {
    return soma + " copos de água";
  }
}
  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
  // linha 28 > " / / " : combina textos com o mesmo padrão ; 
  // linha 28 > "\d+": coleta um ou mais digitos;
  // linha 28 > "g": significa "global", é fundamental para fazer o loop funcionar
    // referencia linha 28 > https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  // linha 29 > ".match": a tag match trás todos os correspondentes solicitads no regex;
  // linha 29 > ".map()": converte todos os resultados obtidos em uma array;
  // linha 29 > "Number": Converte a "string" em "number"
    // referencia linha 29 > https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};