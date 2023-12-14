function SayHelloName (callback) {
    console.log("Hello");
    callback();
}

function PrintName () {
    console.log("Pablo");
}

SayHelloName (PrintName)