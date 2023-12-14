/*Create a function that receives three words as an argument, obtain the sum of all the lengths and print by console if that sum is a multiple of 2, 4 or 5*/

function getStringWord (word1,word2, word3){
    let TotalLength= word1.Length+ word2.Length + word3.Length

if (TotalLength % 2) {
    console.log("Es múltiplo de 2");
}
else if(TotalLength % 4) {
    console.log("Es múltiplo de 3");
}
else if (TotalLength % 5) {
    console.log("Es múltiplo de 5");
}
}

console.log(getStringWord("Hola", "Adios", "Hasta nunqui"));