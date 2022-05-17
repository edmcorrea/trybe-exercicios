
// ########################## FOR EACH ########################################
 const forEach = () => {
  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  // existe algum problema em utilizar o student ao invés do students?
  function verifyGrades() {
    students.forEach((student, index) => {    
      if (student.grade >= 60) {
        // students[index].approved = 'Aprovado';
        student.approved = 'Aprovado';
      } else {
        // students[index].approved = 'Recuperação';
        student.approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  // console.log(students);
  
  // ########################### EXEMPLO 2 ####################
  
  const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    // console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach((elemento) => showEmailList(elemento));
  emailListInData.forEach(showEmailList);
  
  // ################### exemplo 3 ##############
  const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
  
  const convertToUpperCase = (name, index) => {
    names[index] = name.toUpperCase();
  };
  
  names.forEach(convertToUpperCase);
  // console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
 }
 forEach();

 // ########################## Find ########################################
 const exemplosFind  = () => {

  // ##### Exemplo 1 #######
  const numbers = [19, 21, 30, 3, 45, 22, 15];

  const findDivisibleBy3And5 = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return num;
    }    

  }
  const divisible3e5 = numbers.find(findDivisibleBy3And5)    

  // console.log(divisible3e5)

  // ###### Exemplo 2 #######
  const names = ['João', 'Irene', 'Fernando', 'Maria'];

  const findNameWithFiveLetters = () => names.find((name) => name.length === 5);  
  
  // console.log(findNameWithFiveLetters());


  // ###### Exemplo 3 #######
  const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id === id)
  }

  // console.log(findMusic('31031685'));
 }
exemplosFind();

 // ########################## SOME E EVERY ########################################
const exemplosSome = () => {

// EXEMPLO 1
  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (arr, name) => {
    return arr.some((elemento) => elemento === name);
  }

  console.log(hasName(names, 'Ana'));

  // EXEMPLO 2:
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((elemento) => elemento.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));


}
exemplosSome();
