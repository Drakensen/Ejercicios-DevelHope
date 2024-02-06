// Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally method.

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
  })
  
  .finally(() => {
    console.log("Proceso finalizado."); //Se agrega esto al ejercicio, que se ejecutará siempre, tanto si la promesa se resuelve como si se rechaza.
  });