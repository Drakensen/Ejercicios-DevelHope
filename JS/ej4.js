/*Create a function sumUntil that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.

Example:*/

function sumUntil(maxValue) {
    let sum=0
    for(let i=0; i<=maxValue; i++) {
        sum+=i
    console.log(i);
}
console.log(sum)
}

sumUntil(5); // OUTPUT: 15