/* 'https://api.github.com/users/' + user + '/repos'*/

async function fetchgithub() {
    try {
        const response = await fetch ('https://api.github.com/users/');
    
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error: ", error.message);
        return []
    }
}

async function main () {
    try {
        const user = await fetchgithub();
        console.log(user + "repositorios");
    } catch (error) {
        console.log("Error en la ejecución principal", error.message)
    }
}

main ()