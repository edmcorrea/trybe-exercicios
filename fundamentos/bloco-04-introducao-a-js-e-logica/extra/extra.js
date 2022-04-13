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