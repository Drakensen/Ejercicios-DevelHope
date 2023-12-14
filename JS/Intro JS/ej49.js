/*Remove the last element of the array and add the following one at the end of the array: 
{ id: 3, name: "Francesco", lastname: "Verdi", age: 41 }*/

const students = [
    { id: 1, name: "Luca", lastname: "Rossi", age: 20 },
    { id: 2, name: "Mario", lastname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", lastname: "Brambilla", age: 30 },
];

students.pop();
students.push({ id: 3, name: "Francesco", lastname: "Verdi", age: 41});

for (let i=0; i<students.length; i++) {
    console.log(students [i]);
}