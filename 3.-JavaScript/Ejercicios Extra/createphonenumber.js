/*
Escribe una función que acepte un array de 10 enteros (entre 0 y 9) 
y devuelva una cadena de esos números en formato de número de teléfono.

EJEMPLO: 
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => devuelve "(123) 456-7890"    
*/

function createPhoneNumber(numbers) {
    let ntlf = "";
    numbers.forEach((element, i) => {
        if (i==0) {
            ntlf += `(${element}`;
        }
        else if (i==3) {
            ntlf += `) ${element}`;
        }
        else if (i==6) {
            ntlf += `-${element}`;
        }
        else {
            ntlf += element;
        }
    });
    return ntlf
}

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => devuelve "(123) 456-7890"
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // => devuelve "(111) 111-1111"
  console.log(createPhoneNumber([2, 2, 3, 5, 7, 1, 8, 2, 4, 8])); // => devuelve "(223) 571-8248"