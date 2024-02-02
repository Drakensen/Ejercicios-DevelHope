/* Define a class called Person that takes in two arguments (firstName and lastName) in the constructor. */

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let pablo = new Person("Pablo", "Fernández");
console.log(pablo);