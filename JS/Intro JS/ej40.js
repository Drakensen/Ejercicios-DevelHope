let user = {
    name: "Pablo",
    age: 31,
};

let newUser = {};
for (let key in user) {
    newUser[key] = user [key]
}

newUser.name= "Adri"

console.log(user);
console.log(newUser);