/* Try to write your first closure. Write a function called printName and declare inside it a variable called helloName, 
the value of this variable will be: "Hello John". Also declare a function named inner and return the helloName variable. 
The purpose is printing "Hello John" in the console. */

function printName () {  //Crea una Función.
    let helloName = "Hello John"; //Crea una variable.
    
    function inner() { //Aquí creas una segunda función dentro de la primera función.
        console.log(helloName);
    }
    return inner; //Aquí llamas a la segunda función.
}

printName()(); //Aquí muestra por pantalla a la primera función (que realmente está dando la segunda, que es la única que hace algo funcional).