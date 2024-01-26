/*Turn the variables functions into arrow functions and combine the functions so that the result of the following mathematical operation 
is printed on the console: ((2 + 4) * (5 + 2) - 2) / 5*/

const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const value = divide(subtract(multiply(sum(2,4), sum (5,2)),2),5)

const log = (value) => {
  console.log(value);
};

log(value);