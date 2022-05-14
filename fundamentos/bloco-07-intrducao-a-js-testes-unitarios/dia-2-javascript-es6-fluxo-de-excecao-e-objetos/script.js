const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// const habilidades = (student1) => Object.keys(student1);

// console.log(habilidades(student1));

//########################## PARTE 2 #######################:

const parte2 = () => {
  const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  
  // const customerInfo = (order) => {
  //   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  // }
  
  // customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Joao';
    order.payment = 50;
    console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0] } é R$ ${order.payment},00.`);
  
  }
  
  orderModifier(order);
}
parte2();
//########################## PARTE 3 #######################:

const parte3 = () => {
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1
  const adicionarLesson2 = (obj, key, value) => {
    obj[key] = value;
  };
  adicionarLesson2(lesson2, 'turno', 'noite');
  // console.log(lesson2);

  //2
  const listKeys = (obj) => Object.keys(obj);  
  // console.log(listKeys(lesson2));

  //3
  const lLenght = () => Object.keys(lesson2).length;
  // console.log(lLenght());

  //4
  const listValues = (param) => Object.values(param);
  // console.log(listValues(lesson2));

  //5
  let allLessons = {};  
  Object.assign(allLessons, {lesson1, lesson2, lesson3});
  // ou const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  // console.log(allLessons);

  //6
  const getNumberOfStudents = (obj) => {
    let total = 0;
    const arr = Object.keys(obj);
    for (const i in arr) {
      total += obj[arr[i]].numeroEstudantes;
    }
    return total;
  };
  // console.log(getNumberOfStudents(allLessons));

  //7
  const getValueByNumber = (lesson, number) => {
    const generator = Object.values(lesson)[number];
    return generator;
  }
  // console.log(getValueByNumber(lesson1, 0));

  //8
  const verifyPair = (obj, key, value) => (obj[key]===value) ? true : false;
  // console.log(verifyPair(lesson3, 'turno', 'noite'));
}
parte3();

//########################## BONUS #######################:
const bonus = () => {
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  const allLessons = {};  
  Object.assign(allLessons, {lesson1, lesson2, lesson3});

  //1 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
  const watchClass = (lecture) => {
    let total = 0;
    const arr = Object.keys(allLessons);
    for (const i in arr) {
      if(allLessons[arr[i]].materia===lecture){
        total += allLessons[arr[i]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(watchClass('Matemática'));

  //2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
  const createReport = (lesson, teacher) => {
    let relatorio = {
      professor: teacher,
      aulas: '',
      estudantes: '',
    };
    const arr = Object.keys(lesson);
    let alunos = 0;
    let arrayAulas = [];
    for (const i in arr) {
      if(lesson[arr[i]].professor === teacher) {
        arrayAulas.push(lesson[arr[i]].materia);
        alunos += lesson[arr[i]].numeroEstudantes;      
      }      
    }
    relatorio. aulas = arrayAulas;
    relatorio.estudantes = alunos;
    return relatorio;
  }
  console.log(createReport(allLessons, 'Maria Clara'));
}
bonus();