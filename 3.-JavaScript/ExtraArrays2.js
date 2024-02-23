function checkInString(array, term) {
    const newArray = array.filter(item => item.match(term))
    return newArray
}

let input= ["Ana", "Santi", "Nico", "Anastasia"]
let term = "Ana"

console.log(checkInString(input,term));