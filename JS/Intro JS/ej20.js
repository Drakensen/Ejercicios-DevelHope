let primitive = 2 //Para String (letras), Number (Número) o Boolean (true/false)

if (typeof primitive === "String") {
    console.log("The variable is a STRING")
} else if (typeof primitive === "Number") {
    console.log("The variable is a NUMBER")
} else if (typeof primitive === "Boolean") {
    console.log("The variable is a BOOLEAN") 
} else if (typeof primitive === "") {
    console.log("Variable not declared")
}