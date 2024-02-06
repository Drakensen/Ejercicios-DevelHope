/* Write a first promise that takes as parameter the variable isLogged . If the variable is true, then we return a random number from the resolve, 
otherwise we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than
0.5, in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error. Once this is done, 
try to chain the promises to eventually return the final object {name: "John", age: 24} */

const isLogged = true; //Si es false no está logeado da error y termina. Si es verdadero continua y nos da el número aleatorio.
function myPromise(isLogged) {
    return  new Promise((resolve, reject) => {
        if (isLogged) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; //Número aleatorio del 1 al 100.
        resolve(randomNumber);
        }   else {
        reject (new Error("Not is Logged"))
            } 
    });       
}

function showData(randomNumber) {
    return new Promise((resolve, reject) => {
      if (randomNumber > 50) {
        resolve({ name: "John", age: 24 }); //Si es mayor que 50 nos da el resultado que pide el ejercicio.
      } else {
        reject(new Error("El número aleatorio no es mayor que 50.")); //Si no, muestra que no lo es.
      }
    });
}

myPromise(isLogged)
  .then((randomNumber) => {
    console.log("Número aleatorio:", randomNumber);
    return showData(randomNumber);
  })
  .then((result) => {
    console.log("Resultado:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });