let user = {
    name: "Pablo",
    age: 31,
};

let newUser = {
    name: "Adri",
    age: 30,
};

for (let key in user) {
    newUser [key] = user [key];
}

newUser= "Adri"

console.log(user);
console.log(newUser);