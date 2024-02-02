/* Create an object person. Print its key/value pair in the console. Try to use the method Object.keys */

const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25
}

function printObject (obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];
        console.log(`${key}: ${value}`);
    }
}
    
printObject(person);