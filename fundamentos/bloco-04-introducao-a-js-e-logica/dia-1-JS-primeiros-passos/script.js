/*
console.log("Atividade 1"); 
let a = 3;
let b = 5;
let c = 7;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);

console.log("Atividade 2"); 

if(a>b){
    console.log("o maior numero é "+a);
}else{
    console.log("o maior numero é "+b);
}

console.log("Atividade 3"); 
if(a>b && a>c){    
    console.log("o maior numero é "+a);
    
}else if (b>a && b>c){    
    console.log("o maior numero é "+b);
    
}else{
    console.log("o maior numero é "+c);
}*/

console.log("Atividade 4");
const valor=-4;
if(valor>0){    
    console.log("positive");
    
}else if (valor==0){    
    console.log("zero");
    
}else{
    console.log("negative");
}

console.log("Atividade 5");
let i;
let ii=70;
let iii=50;
soma=i+ii+iii;
let resposta;
if(i<=0 || ii<0 || iii<0){
  resposta = "insira um valor valido";  
}else if(soma!=180){
  resposta = false;
}else{
  resposta = true;
}

console.log(resposta);

console.log("Atividade 6");

console.log("Atividade 7");
let notaNumerica=89;
let notaAlfa;
if(notaNumerica>=90){
  notaAlfa="A";
}else if(notaNumerica>=80){
  notaAlfa="B";
}else if(notaNumerica>=70){
  notaAlfa="C";
}else if(notaNumerica>=60){
  notaAlfa="D";
}else if(notaNumerica>=50){
  notaAlfa="E";
}else {
  notaAlfa="F";
}    

console.log("Sua nota é: "+notaAlfa);