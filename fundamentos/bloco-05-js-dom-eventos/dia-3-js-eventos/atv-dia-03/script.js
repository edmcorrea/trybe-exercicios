function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

arrDay=[29,30,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

for(i=0; i<arrDay.length; i+=1){
  console.log(arrDay[i]);
  const ulDay = document.querySelector("#days");
  const liDay = document.createElement("li");
  liDay.classList.add("day");
  if(arrDay[i]===24 || arrDay[i]===25 || arrDay[i]===31){
    liDay.classList.add("holiday");
    liDay.innerHTML= arrDay[i];
    ulDay.appendChild(liDay);
  }if(i===5 || i===12 || i===19 || i===26 || i===33){
    liDay.classList.add("friday");    
    liDay.innerHTML= arrDay[i];
    ulDay.appendChild(liDay);
  }else{
    liDay.innerHTML= arrDay[i];
    ulDay.appendChild(liDay);
  }    
}


// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// let feriados = document.querySelectorAll(".holiday");
// feriados.add

function holidays(buttonName) {  
  const buttonsContainer = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = buttonName;
  buttonsContainer.appendChild(button);  
}

holidays("Feriados");


// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function holidayEstadoPrimario() {
  let button = document.querySelector("#btn-holiday");
  let holiday = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let color = "white";

  button.addEventListener("click", () => {
    for (let i = 0; i < holiday.length; i++) {
      if(holiday[i].style.backgroundColor === color){
        holiday[i].style.backgroundColor = "rgb(238,238,238)";
      }else{
        holiday[i].style.backgroundColor = "white";
      }      
    }
  })
}

holidayEstadoPrimario();


// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function diaDaSemana(diaSemana) {
  const buttonContainer = document.querySelector(".buttons-container");
  const buttonSexta = document.createElement("button");
  buttonSexta.id = "btn-friday";
  buttonSexta.innerHTML = "Sextou";
  buttonContainer.appendChild(buttonSexta);
}

diaDaSemana("Sexta-Feira");

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function Sextou() {
  const Sextas = document.querySelectorAll(".friday");
  const buttonSexta = document.querySelector("#btn-friday");
  let SextasBackgroundChange = "rgb(238,238,238)";
  let SextasBackground = "green";

  

  buttonSexta.addEventListener("click", () => {
    for (let i = 0; i < Sextas.length; i+=1) {
      if (Sextas[i].style.backgroundColor===SextasBackground) {
        Sextas[i].style.backgroundColor=SextasBackgroundChange;
      }else{
        Sextas[i].style.backgroundColor=SextasBackground;
      }      
    }
  })
}

Sextou();

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomEfect() {
  const li = document.querySelectorAll(".day");   
  
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", function zoom(event) {         
      event.target.classList.add("zoom");          
    })
    li[i].addEventListener("mouseout", function tiraZoom(event) {         
      event.target.classList.remove("zoom");    
    })
  }
}

zoomEfect();


// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function toDo(tarefa) {
  const myTask = document.querySelector(".my-tasks");
  const span = document.createElement("span");
  span.innerText = tarefa;  
  myTask.appendChild(span);
}

toDo("cozinhar");


// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function corDeFundo(cor) {
  const myTask = document.querySelector(".my-tasks");
  const task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("selected");
  task.style.backgroundColor = cor;
  myTask.appendChild(task);
  return cor;
}

corDeFundo("blue");

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function Select() {
  const task = document.querySelector(".task");
  
  
  task.addEventListener("click", () => {
    if(task.classList.contains("selected")===true){
      task.classList.remove("selected");
    }else{
      task.classList.add("selected");
    }
  })
}

Select();

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function selectTarefa() {
  const selected = document.querySelector(".selected");
  const day = document.querySelector(".day");
  let bg = selected.style.backgroundColor;
  let bgLast = "rgb(119,119,119)";
    
  day.addEventListener("click", () => {    
    if (day.style.color === bg) {
      day.style.color = bgLast;
    }else{
      day.style.color = bg;
    }
  })
}

selectTarefa()