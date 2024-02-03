/* Write a function called repeatHello which takes a callback as it's parameter. The callback function will simply print "Hello". 
The repeatHello function will have to execute the callback function with an interval of 1 second. The callback function must be an arrow function. */

function repeatHello (callback) { //Llama a una función.
    setInterval (()=> { //Ejecuta por intervalo.
            callback();
    }, 1000)
}

function helloWorld() { //Se crea una función aparte.
    console.log("Hello")
}

repeatHello(helloWorld); //Ejecuta función y el parámetro que espera es helloWorld.