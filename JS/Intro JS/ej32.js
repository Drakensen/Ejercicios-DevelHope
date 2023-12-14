function sayHelloName (callback){
    setTimeout(function(){
        console.log("Hello");
        callback();
    },2000);

}

function printName (){
    console.log("Pablo"); 
}

sayHelloName(printName);