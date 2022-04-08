//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// function inversor(s){
//   let nova ="";
//   for(let i=s.length-1; i>=0; i-=1){
//     nova+=s[i];    
//   }
//   console.log(nova);
// }
// console.log(inversor("banana"));

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
//criar maior e posicaoMaior, menor e posicaoMenor;
//quando encontrado, imprimir tudo;

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra =array[0];
let menorPalavra =array[0];

for (let index = 0; index < array.length; index++) {
  if(maiorPalavra.length < array[index].length){
    maiorPalavra=array[index];
    console.log(maiorPalavra);
  }
  if(menorPalavra.length > array[index].length){
    menorPalavra=array[index];
    console.log(menorPalavra);
  }
}

// let maior=array[0].length;
// let menor=array[0].length;
// let posicaoMaior=0;
// let posicaoMenor=0;
// for(let i=0; i<array.length; i+=1){
//   if(maior<array[i].length){
//     maior=array[i].length;
//     posicaoMaior=i;    
//   }
//   if(menor>array[i].length){
//     menor=array[i].length;
//     posicaoMenor=i;
//   }
// }
// console.log("A maior palara é "+array[posicaoMaior]);
// console.log("A menor palara é "+array[posicaoMenor]);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
//PASSO A PASSO
//FAZ O CONTADOR FOR 1 A 50
//AUXILIAR=0, MAIOR PRIMO"",

// let auxiliar;
// let maiorPrimo=1;
// for(let i=1; i<=50; i+=1){
//   for(let ii=1; ii<=i; ii+=1){
//     if(i%ii===0){
//       auxiliar+=1;
//     }
//   }
//   if(auxiliar==2){
//     maiorPrimo=i;
//   }
//   auxiliar=0;
// }
// console.log(maiorPrimo);


//BONUS
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
// function quadrado(n) {
//   let quadrado = "";
//   for (let i = 0; i < n; i+=1) {
//     for (let i = 0; i < n; i+=1) {
//       quadrado += "*";    
//     }
//     console.log(quadrado);
//     quadrado="";
//   }
// }
// console.log(quadrado(4));


// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
  // n = 5;
  // let triInverso = "";
  // for (let i = 1; i <= n; i+=1) {
  //   for(let ii=0; ii<n-i; ii+=1){
  //     triInverso+=" ";
  //   }
  //   for(let ii=n-i; ii<n; ii+=1){
  //     triInverso += "*";
  //   }      
  //   console.log(triInverso);
  //   triInverso="";      
  // }


//4- Depois, faça uma pirâmide com n asteriscos de base:
// let n=5;
// if(n%2==0){
//   console.log("Não é possível fazer uma pirâmide com "+n+" asteriscos");
// }else{
//   let vazio = "";
//   let asterisco = "";
//   let piramide = "";
//   let meio = n/2+0.5;
//   for(let i=1; i<=meio; ){

//   }
//   for (let ii = 1; ii < meio; ii+=2) {
//     const element = array[index];
    
//   }

// }
