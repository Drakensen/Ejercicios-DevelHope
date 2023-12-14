//Crear una función que muestre por consola si el usuario entra a plataforma

const useAccess = (username, password) => {
    let passwordString = String(password);
    let usernameToString = String(username);
    let checkPassword;
    let userNick = true;

    if (passwordToString.Length >= 4 && passwordToString.Length <= 6) {
        checkPassword = true;
        console.log("Password valided");
    } else {
        checkPassword = false;
        console.log("Check your password");
    }

    switch (username) {
        case true:
            userNick = true;
            break;

        default:
            userNick = false;
            break;
    }

    passwordToString && userNick ? console.log():
};
