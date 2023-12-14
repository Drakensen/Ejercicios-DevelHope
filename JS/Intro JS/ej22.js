let primitive = 2 ;//Para String (letras), Number (Número) o Boolean (true/false)

switch (typeof primitive) {

    case 'String' :
    console.log("The variable is a STRING");
    break;

    case  'Number' :
    console.log("The variable is a NUMBER");
    break;

    case 'Boolean' :
    console.log("The variable is a BOOLEAN"); 
    break;
    
    default : 
    console.log("Variable not declared");
}