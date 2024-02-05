// Convert the developer object into JSON

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
console.log(developer); //Se mostrará primero el objeto normal.
// Print developer as JSON object

const developerJSON = JSON.stringify(developer);
console.log(developerJSON); //Y después, como pide el ejercicio, se muestra el objeto como tipo JSON.