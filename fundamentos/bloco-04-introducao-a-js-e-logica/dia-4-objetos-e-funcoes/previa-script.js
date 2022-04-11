// player = {
//   name : 'Marta',
//   lastName : 'Silva',
//   age : 34,
//   medals : { golden: 2, silver: 3 },
// }

// console.log("A jogadora "+player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log("A jogadora "+player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes." );
// console.log("A jogadora possui " +player.medals.golden+ " medalhas de ouro e " +player.medals.silver+ " medalhas de prata.");




//PARTE I - OBJETOS E FOR/IN

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// console.log("Bem vinda, "+info.personagem);

info.recorrente = "Sim";

// //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// console.log(info);

// // /3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for(let i in info){
//   console.log(i);
// }
// //4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for(let i in info){
//   console.log(info[i]);
// }

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem:  'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: "Sim"
// };
// for(let i in info && info2){  
//   if(info[i]===info2[i]){
//     console.log("Ambo(a)s "+i);
//   }else{
//     console.log(info[i]+" "+info2[i]);
//   }  
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// //6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+ " se chama "+leitor.livrosFavoritos[0].titulo);

// //7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// leitor.livrosFavoritos.push({titulo:'Harry Potter e o Prisioneiro de Azkaban',autor: 'JK Rowling', editora: 'Rocco',})

// console.log(leitor.livrosFavoritos);

// //8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
// console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" livros favoritos");



//PARTE II - FUNCOES
//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let newLetter="";
function verificaPalindromo(str){  
  for(let i=str.length; i>=0; i-=1){
    newLetter+=str[i];    
  }     
  return newLetter;
}
console.log(verificaPalindromo('azul'));
 // DUVIDA: PORQUE ANTES ELE APARECDIA UNDEFINED? é por causa do return?

// newLetter="";

// function verificaPalindromo(str){  
//   for(let i=str.length; i>=0; i-=1){
//     newLetter+=str[i];    
//   }
//   if(newLetter===str){
//     //console.log("Eu sou um Palindromo");
//     return true;
//   }else{
//     //console.log("NÃO, NÃO SOU UM PALINDROMO");
//     return false
//   }  
// }
// console.log(verificaPalindromo('azul')); 

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// function maiorValor(array) {
//   let maiorValor = array[0];
//   let posicao; 
//   for(let i=0; i<array.length; i+=1){
//     if (maiorValor<array[i]) {
//       posicao=i;
//     }
//   }
//   return posicao;
// }
// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// function menorValor(array) {
//   let menorValor = array[0];
//   let posicao;
//   for(let i=0; i<array.length; i+=1){
//     if (menorValor>array[i]) {      
//       posicao=i;
//     }
//   }
//   return posicao;
// }
// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// function maiorNome(array) {
//   let maiorNome = array[0];  
//   for(let i=0; i<array.length; i+=1){
//     if (maiorNome.length<array[i].length) {      
//       maiorNome = array[i];
//     }
//   }
//   return maiorNome;
// }
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// function maisSeRepete(array) {
//   let repetidor=0;
//   let qtddDeRepeticoes=0;
//   let maisSeRepete = array[0];  
//   for(let i=0; i<array.length; i+=1){
//     for(let ii=0; ii<array.length; ii+=1){
//       if(array[i]===array[ii]){
//         repetidor++;
//       }
//     }
//     if (qtddDeRepeticoes<repetidor) {
//       maisSeRepete = array[i];
//       qtddDeRepeticoes=repetidor;
//     }
//     repetidor = 0;
//   }
//   console.log(qtddDeRepeticoes);
//   return maisSeRepete;
// }
// console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// function somatorio(num) {
//   let soma=0;
//   for(let i=1;i<=num; i+=1){
//     soma+=i;
//   }
//   return soma;
// }
// console.log(somatorio(5));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaWord(word, ending) {
  let num = ending.length;
  if(ending===word.slice(-num)){
    return true;
  }else{
    return false;
  }
}
console.log(verificaWord("eu sou a maria do bairro", "airr"));