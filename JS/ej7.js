/* Starting from the previous exercise, are you able to print the value of helloName, after 1 second? */

function helloName (callback) {
    setTimeout(function(){
        console.log("Hello");
        callback();
    },1000);
    
}

function printName () {
        console.log("Jhon");
}

helloName(printName);