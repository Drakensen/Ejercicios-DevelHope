/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El IMC se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada IMC que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

function IMC (peso, altura) {
    let result= (peso/(altura ** 2))

    if (result < 18.5) {
        return "Bajo de peso";
    } else if (result > 18.5 & result < 25) {
        return "Normal";
    } else if (result > 25 & result < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

console.log(IMC(52, 1.75)) //  "Bajo de peso"
console.log(IMC(65, 1.8)) // "Normal"
console.log(IMC(72, 1.6)) // "Sobrepeso"
console.log(IMC(135, 1.7)) // "Obeso"