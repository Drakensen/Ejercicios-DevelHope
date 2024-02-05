/* Perform a code refactoring by using the Rest Operator. The output of the console.log must be the same. */

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
}; */ 

const {id, ...personInfo} = person;  //Así sería la refactorización del código de arriba comentado entre las líneas 10 y 15 en una sola línea.
console.log(id, personInfo);