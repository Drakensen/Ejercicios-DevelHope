//Quiero hacer que solo valide la contraseña si tiene 4 tipos de caracteres y la longitud sea entre 8 y 12.

function valitedPass(pass) {
    const regex = /^[A-Za-z0-9@#$%^&¿?+=.] {8,12}$/; // Expresión regular para verificar que la contraseña contenga solo los caracteres permitidos.

    if (regex.test(pass)) {
        return true
    } else {
        return false
    }
}

const pass1= "PxC12+uGY";
const pass2= "12345678";
const pass3= "Abcd1234";
const pass4= "KXcv43P9-h";

console.log(valitedPass(pass1));
console.log(valitedPass(pass2));
console.log(valitedPass(pass3));
console.log(valitedPass(pass4));