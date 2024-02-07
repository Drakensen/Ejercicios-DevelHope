/* Using async and await, implement the necessary code to perform an HTTP POST request. 
To create a new post, use the following URL: https://jsonplaceholder.typicode.com/posts (Method: Post). 
The body of the request must contain a post object with the following information: title and Flag Completed. 
The post data must be transmitted following the compilation of a form. */

async function createNewPost(postData) { //Definimos una función que utiliza 'async' para que permita usar 'await' dentro.
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { //Hacemos una solicitud HTTP POST a la URL para crear una nueva publicación. 
            method:'POST', // Especificamos el método POST. 
            headers: {
                'Content-Type': 'application/json' //Establecemos los encabezados para indicar que el tipo de contenido es JSON.
            },
            body: JSON.stringify(postData) //Enviamos los datos de la publicación como un objeto JSON convertido a una cadena mediante JSON.stringify.
        });
        if (!response.ok) {
            throw new Error("Error al crear nueva publicación.");
        }
        const newPost = await response.json(); //Si la solicitud es exitosa, convertimos la respuesta en formato JSON y devolvemos la nueva publicación.
        return newPost;
    } catch (error) {
        console.error("Error: ", error.message);
        return null;
    }
}

async function main() { //En la función main, creamos un objeto postData que contiene la información de la nueva publicación y luego llamamos a createNewPost para crear la publicación. 
    try {
        const postData = {
            title: "Mi nueva publicación",
            completed: false
        };
        const newPost = await createNewPost(postData); //Finalmente, imprimimos la nueva publicación o manejamos cualquier error que pueda ocurrir durante la ejecución.
        console.log("Nueva publicación creada", newPost);
    } catch (error) {
        console.error("Error en la ejecución principal: ", error.message); 
    }
}

main();