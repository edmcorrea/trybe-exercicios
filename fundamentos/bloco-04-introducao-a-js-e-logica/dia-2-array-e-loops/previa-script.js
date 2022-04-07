/* Exemplos Array

//Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


//Procure o índice do valor "Portfólio" do array menu :
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);


//Adicione o valor "Contato" no final do array menu :
menu.push("Contato");

console.log(menu); */



//Exemplos com for e for/of

//Exemplo com for
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i=0; i<groceryList.length; i++){
  console.log(groceryList[i]);
}

//exemplo com for/of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let i of names){
  console.log(i);
}
