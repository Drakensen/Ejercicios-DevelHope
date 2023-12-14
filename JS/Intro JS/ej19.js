let name ;
let lastname = "Fernández"

if (name && lastname) {
    let fullname = name + " " + lastname;
    console.log(fullname)
} else if (!name && lastname) {
    console.log("Name is not available and the lastname is " + lastname)
} else if (name && !lastname) {
    console.log("The name is " + name + " and lastname is not available")
} else console.log("Invaled Fullname");