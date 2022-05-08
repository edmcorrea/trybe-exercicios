//PARTE 1

// 1. 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// Copie o código abaixo.
const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope += ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  };  
}

// testingScope(true);

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sort = sort(a, b) => a-b;
const sortsFunction = (a, b) => a-b;

oddsAndEvens.sort(sortsFunction);

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉



//PARTE 2

// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const calculoFatorial = param => {
  let fatorial = 1;  
  for (let i = 1; i <= param; i+=1) {
    fatorial *= i;
  }
  return fatorial;
}
console.log(calculoFatorial(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const array = phrase.split(' ');
  let biggestPhrase = array[0];
  for (let i in array) {
    if (biggestPhrase.length < array[i].length) {
      biggestPhrase = array[i];
    }
    // biggestPhrase = (biggestPhrase.length < array[i].length) ?  : array[i];
  }
  return biggestPhrase;
}

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 🚀 Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const eventoClique = () => {
  const button = document.querySelector(".button");
  const p = document.querySelector(".count");
  let clickCount = 0;
  p.innerHTML = `Você clicou ${clickCount} VEZES no botão "Clique Aqui`;  
  button.addEventListener("click", () => p.innerHTML = `Você clicou ${clickCount+=1} VEZES no botão "Clique Aqui`);  
}

// eventoClique();

// 4. 🚀 Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const skills = ['HTML', 'CSS', 'JS', 'React', 'Python'];

const substituiX = (string) => {
  const substituto = 'edmix';
  let novaString = "";
  for (let i = 0; i < string.length; i+=1) {
    (string[i]=== 'x') ? novaString += substituto : novaString += string[i];
    // console.log(novaString);
  }
  return novaString;
}

const retornoFuncao1 = substituiX("Tryber x aqui!");


// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".

const funcao2 = (param) => {
  console.log(param);
  let concatenado = `${param} Minhas cinco principais habilidades são:`;
  for (const i in skills) {
    const skillsAlfabetico = skills.sort();
    concatenado +=  `, ${skillsAlfabetico[i]}`;
  }
  concatenado +=  '.';
  return concatenado;
}

console.log(funcao2(retornoFuncao1));