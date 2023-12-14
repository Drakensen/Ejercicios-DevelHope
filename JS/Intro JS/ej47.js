/*1.-Remove the element Giovanni.
2.-Add a new element called Pippo at the end of the array.
3.-Add the element Giovanni to the beginning of the array.*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

names.pop();
console.log(names);

names.push("Pippo");
console.log(names);

names.unshift("Giovanni");
console.log(names);