/* Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */

function fizzBuzz (n) {
    if (n%3 == 0 && n%5 == 0) {
        return "fizzbuzz";
    } else if (n%3 == 0) {
        return "fizz";
    } else if (n%5 == 0) {
        return "buzz";
    } else {
        return n
    }
}

console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8