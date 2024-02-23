function getNames(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push({})
    });
    const orden = array.map(item => item.name)
    return newArray.sort((a,b) => a-b)
}

let input =
[
    {
        name: "Nicolas",
        lastName: "Molina",
        age: 28
    },
    {
        name: "Ana",
        lastName: "Molina",
        age: 19
    },
    {
        name: "Zulema",
        lastName: "Vicente",
        age: 21
    }
]

console.log(getNames(input));