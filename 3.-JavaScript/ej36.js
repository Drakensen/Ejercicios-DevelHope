/* Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?
The callback function must be an arrow function, can you also explain why? */

function repeatHello (callback) {
    let counter = setInterval(callback, 1000)
    setTimeout(()=> clearInterval(counter), 5000)
}

function sayHello() {
    console.log("Hello")
}

repeatHello(sayHello);