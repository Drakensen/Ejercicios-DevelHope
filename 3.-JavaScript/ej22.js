// Use the destructuring to assign the values just with one code line.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName, lastName, age} = person
console.log(id, firstName, lastName, age);