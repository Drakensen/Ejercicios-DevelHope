const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumapares(numeros) {
    let result=0
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i]%2 == 0) {
            result= result+numeros[i]
        }
    }
    return result
} 

console.log(sumapares(numeros))