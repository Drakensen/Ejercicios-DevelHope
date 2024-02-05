/* The sum function has a high numbers of parameters. How can we improve the code in order to make it accept any amount of numbers to sum as its argument? */

function sum(... numbers) {
    return numbers.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(10+20+3+5+2+8+2+4+3+1+9+21+5+7)); //El ejercicio pide que pueda tener cualquier número de parámetros para sumar.
console.log(sum(3+2+5)); //Aquí otro ejemplo de que el código funciona, con menos de cinco parámetros.