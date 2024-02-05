/* Create a class called Developer. The Developer class has to inherit the Person class created in the previous exercise. 
The Developer class takes in another argument in the constructor method (role). */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Developer extends Person {
    constructor(firstName, lastName, role) {
        super(firstName, lastName)
        this.role = role;
    }
}

let pablo = new Developer("Pablo", "Fernández", "Front-end");
console.log(pablo);