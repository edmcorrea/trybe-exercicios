/*
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e imprima o resultado na tela..
*/
// let limit = 10
// 	let accumulator = 1;
//   let soma=0;
// 	for(let i=0; i<=limit; i+=1){
//     soma = soma + i;
//     console.log(soma);
// 		// accumulator = accumulator + i;
// }
// console.log(soma);


/*
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que guarde em um array todos os números inteiros ímpares desse intervalo.
Imprima o resultado do array na tela.
*/
// let impares=[];
// for(let i=1; i<=50;i+=1){
//   if(i%2==0){

//   }else{
//     impares.push(i);
//   }
// }
// console.log(impares);

// for(let i=1; i<=50;i+=2){
//   impares.push(i);
// }
// console.log(impares);

/*
Escreva um algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array).
Encontre e imprima no console a posição index em que o elemento se encontra no array.
Caso não o encontre, imprima a mensagem "Elemento não encontrado"
*/

// let alfabeto = ["a","b","c","d","e","f"];
// let letra = "d";
// let auxiliar = 0;
// let posicao;
// for(let i=0; i<alfabeto.length; i+=1){
//   if(letra == alfabeto[i]){
//     auxiliar+=1;
//     posicao = i;
//   }  
// }
// if(auxiliar===0){
//   console.log("Elemento não encontrado");  
// }else{
//   console.log(posicao);
// }


let array = [1, 3, 5, 7, 9, 11, 13, 15,
  17, 19, 21, 23, 25, 27, 29, 31,
  33, 35, 37, 39, 41, 43, 45, 47,
  49
];

console.table(array)

let elemento = 39;

for (index = 0; index < array.length; index += 1) {
  if (elemento == array[index]) {
      console.log(index)
      break;
  } else if (array.length - 1 == index){
      console.log('elemento não encontrado');
  }
 }