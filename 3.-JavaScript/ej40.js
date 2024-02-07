/* Using async and await, implement the necessary code to recover the Todos list present in the following URL: https://jsonplaceholder.typicode.com/todos */

async function fetchTodos() { //Definimos una función que utiliza 'async' para que permita usar 'await' dentro.
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); //Dentro de "fetchTodos" usamos 'fetch' para solicitar la URL de la lista de Todos.
    if (!response.ok) {
      throw new Error("Error al recuperar la lista de Todos"); //Verificamos si la respuesta fue exitosa. Si no lo fue, lanzamos un error.
    }
    const todos = await response.json(); //Convertimos la respuesta en formato JSON.
    return todos; //Devolvemos la lista de todos.
  } catch (error) {
    console.error("Error: ", error.message); //En caso que ocurriese algún error durante el proceso, lo capturamos en el bloque 'catch' y lo manipulamos adecuadamente.
    return []; //Devolvemos una lista vacía en caso de error.
  }
}

async function main() { //Finalmente, en la función "main", llamamos a "fetchTodos" utilizando 'await' para esperar la lista de Todos y luego imprimimos la lista o manejamos cualquier error que pueda ocurrir durante la ejecución.
  try {
    const todos = await fetchTodos();
    console.log("Lista de Todos", todos);
  } catch (error) {
    console.log("Error en la ejecución principal: ", error.message);
  }
}

main();