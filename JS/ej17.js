/* Create a class called Developer. The Developer class has to inherit the Person class created in the previous exercise. 
The Developer class takes in another argument in the constructor method (role). */

class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class developer extends person {
    constructor(firstName, lastName, role) {
        super(firstName, lastName)
        this.role = role;
    }
}

let pablo = new developer("Pablo", "Fernández", "Front-end");
console.log(pablo);