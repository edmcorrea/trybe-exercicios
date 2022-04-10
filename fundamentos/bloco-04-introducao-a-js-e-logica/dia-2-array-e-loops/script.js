// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
// for(i=0; i<numbers.length; i++){
//   console.log(numbers[i]);
// }

//exercicio 2
// let soma=0;
// for(i=0; i < numbers.length; i++){
//   soma += numbers[i];
// }
// console.log("o resultado da soma é ${soma}");

//exercicio 3 e 4
// let soma=0;
// for(i=0; i < numbers.length; i++){
//   soma = soma + numbers[i];  
// }

// let media = soma/numbers.length;
// if(media>20){
//   console.log("Media maior que 20");
// }else{
//   console.log("Media menor que 20");
// }

//exercicio 5
// let aux=numbers[0];
// for(i=0; i<numbers.length; i++){
//   if(numbers[i]>aux){
//     aux=numbers[i];
//   }
// }
// console.log(aux);

//exercicio 6 
// let impar = 0;
// let par = 0;
// for(i=0; i<numbers.length; i++){
//   let aux = numbers[i]%2
//   if(aux==1){
//     impar+=1;
//   }else{
//     par+=1;
//   }
// }
// if(impar==0){
//   console.log("nenhum valor ímpar encontrado");
// }else{
//   console.log(impar);
// }

//exercicio 7
// let menor=numbers[0];
// for(let i=0; i<numbers.length; i++){
//   if(numbers[i]<menor){
//     menor=numbers[i];
//   }
// }
// console.log(menor);

//exercicio 8 e 9
// let a=[];
// let divisor=[];
// for(i=1; i<=25; i++){
//   a.push(i);  
//   divisor.push(a[i-1]/2);
// }
// console.log(a);
// console.log(divisor);

//EXERCÍCIO DE SALA
// let jogoDoMael=[];
// let totalDeNumeros=[];
// let sorteio=[];
// let listaDeSorteados=[];
// for(let ii=0; ii<6; ii++){
//   sorteio=Math.floor(Math.random()*60+1);
//   listaDeSorteados.push(sorteio);  
// }
// listaDeSorteados=listaDeSorteados.sort();
// console.log(listaDeSorteados);

//BONUS1 - Bubble Sort - ORDENAÇÃO BOLHA CRESCENTE
//let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < n.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (n[index] < n[secondIndex]) {
//       let position = n[index];
//       n[index] = n[secondIndex];
//       n[secondIndex] = position;
//     }
//   }
// }
// console.log(n);

//BONUS2 - - Bubble Sort - ORDENAÇÃO BOLHA DECRESCENTE
//let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < n.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (n[index] > n[secondIndex]) {
//       let position = n[index];
//       n[index] = n[secondIndex];
//       n[secondIndex] = position;
//     }
//   }
// }
// console.log(n);

//BONUS3
// let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let novo = [];
// for(i=0; i<n.length; i++){
//   if(i===n.length-1){
//     let mult = n[i]*2;    
//     novo.push(mult);
//   }else{
//     mult = n[i]*n[i+1];    
//     novo.push(mult);
//   }
// }
// console.log(novo);

//atv noturna

function mask(cc){
  let replace = cc.slice(0,4);
  console.log(replace);
  for(let i=0; i<cc.length-4; i++){
    
  }
}
console.log(mask("06643397510"));
