/*
    TypeScript es un "superconjunto" de JavaScript,
    Esto quiere decir que puede ejecutar programas de dicho lenguaje.
    TypeScript añade funcionalidades a JavaScript.
    
    * Para utilizar TypeScript, debemos instalarlo con el siguiente comando:
    - npm install -g typescript -> Esto instalará typescrit globalmente en nuestro pc
    (Tambien podemos ejecutarlo sin el -g para instalarlo solo en un proyecto)

    * Para ejecutar el archivo, tenemos dos opciones:

    - Ejecutar el comando npm install ts-node y luego, con esta dependencia instalada
    ejecutar npx ts-node ./archivo.ts. ts-node permite ejecutar archivos typescript

    - Compilar el archivo (transformar el archivo .ts a .js), 
    ejecutando los siguientes comandos:
    - tsc --init
    dentro del archivo tsconfig descomentamos la linea:
    "rootDir" -> La carpeta raiz
    y la linea:
    "outDir" -> Carpeta donde se guardaran archivos js
    - tsc -watch
*/

// Los "types" son una forma de definir el tipo de dato de una variable
let variable: string = "Hola mundo";
let numero: number = 10;
let implicito = true;

variable = "Hola mundo 2";
// variable = 11; // <-- Esta linea causa conflito porque "variable" espera un string
// numero = true; // <-- Esta linea produce un error porque "numero" espera un number
// implicito = "error"; // <-- Esta linea produce un error porque "implicito" espera un boolean

/*
    Los tipos de datos de TypeScript son:
    - string    <- Solo permite cadenas de texto
    - number    <- Solo permite numeros
    - boolean   <- Solo permite booleanos
    - any       <- Permite cualquier cosa
    - void      <- Representa la ausencia de tipo o valor (comúnmente utilizado para funciones que no devuelven nada)
    - null      <- Solo permite valores nulos
    - undefined <- Solo permites valores indefinidos
    - never     <- Tipo que representa valores que nunca ocurren (por ejemplo, funciones que lanzan excepciones o nunca terminan)
    - objetos   <- Solo permite objetos con propiedades que nosotros indiquemos
    
    - array     <- Solo permite arrays de algún dato que indiquemos (string[], number[], ...)
    - tuple     <- Similar a un array pero tiene un tamaño fijo y cada posicion tiene un elemento previamente definido
*/

// Tipos en funciones:
// El "number" en a y b es el tipo de dato que espera la funcion
// El "number" luego de los parametros es el tipo de dato que devuelve la funcion
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(2, 2));
// console.log(sumar(2, "a")); // <-- Llora porque el segundo parametro no es un numero

// Utilizo "void" para funciones que no devuelven nada
// La interrogante indica que el parametro es opcional
function consolelog(a: string, b?: string): void {
  console.log(a);
  if (b) {
    console.log(b);
  }
}

consolelog("Hola");
// consolelog(2); // <-- Llora porque el parametro no es un string

// type assertion es para convertir un tipo de dato a otro
function returnAny(): any {
  return 10;
}

let retornoAny = returnAny(); // <-- La variable es de tipo any
let retornoNumber = returnAny() as number; // <-- Aunque la funcion devuelva un any, la variable es de tipo number

// let elementoHtml = document.getElementById("canvas"); // <-- Por defecto es HTMLElement | null
// if (elementoHtml) elementoHtml.getContext("2D")

// let canvas = elementoHtml as HTMLCanvasElement; // <-- "canvas" es HTMLCanvasElement

// if (canvas) canvas.getContext("2D")

// never es un tipo que representa valores que nunca ocurren (Se utiliza poco)
function infiniteLoop(): never {
  while (true) {
    console.log("Bienvenido al infierno >:D");
  }
}

// unknown (desconocido) es un tipo de dato que puede contener cualquier valor
// Se requiere comprobar el tipo de dato antes de usarlo
function testUnknown(a: unknown): void {
  if (typeof a === "string") {
    console.log(a.length); // <-- Sabe que es un string por el condicional
  }
  // console.log(a.length); // <-- No sabe que es un string por el condicional, por eso llora
}

/* TIPOS PERSONALIZADOS */

// Podemos crear tipos personalizados que sean iguales a tipos primitivos
// Aunque esto es "simple", nos puede ayudar a dar una mejor comprensión
type Idioma = string;

const idioma1: Idioma = "español";
const idioma2: Idioma = "ingles";
const idioma3: Idioma = "japones";

// tipos como objetos
type Persona = {
  nombre: string;
  edad: number;
  idioma?: Idioma;
};

const persona1: Persona = {
  nombre: "Agustin",
  edad: 22,
  idioma: "Español",
};

// Tuples
type tuplePersona = [string, number, Idioma];
const nuevaPersonaTuple: tuplePersona = ["Agustin", 22, "español"];

// Además de tipos, podemos crear "interfaces"
interface Person {
  nombre: string;
  edad: number;
  idioma?: Idioma;
}

const persona2: Person = {
  nombre: "Fulanito",
  edad: 30,
};

/*
  Acá se explica muy bien las diferencias entre los tipos de datos y interfaces:
  https://matiashernandez.dev/blog/post/types-vs-interfaces-cuando-utilizar-cada-una
*/

// Resumen:
// Con type podemos definir tipos primitivos, utilizar intersecciones y uniones

type Numero = number;


type Contacto = {
  email: string;
  numero: string;
};


// * Interseccion
type PersonaConDatos = Person & Contacto;

const infoPersona: PersonaConDatos = {
  nombre: "Agustin",
  edad: 22,
  idioma: "Español",
  email: "XK7Y5@example.com",
  numero: "+12 345 678 910",
};

// * Union
let numeroOrString: number | string; // <-- Podemos guardar un numero o un string

// Con las interfaces podemos extender o mezclar

// * Mezclar
interface Mascota {
  nombre: string;
}

interface Mascota {
  color: string;
}

interface Mascota {
  edad: number;
}

const nuevoGato: Mascota = {
  nombre: "Noah",
  color: "gris",
  edad: 2,
};

// * Extender

interface Gato extends Mascota {
  alimentoFavorito: string;
}

const nuevoGato2: Gato = {
  nombre: "Felipe",
  color: "negro",
  edad: 4,
  alimentoFavorito: "whiskas",
};

// * Enums (enumerados)
// Los enums es un tipo de dato que nos permite definir un conjunto de valores predefinidos

enum Colores {
  Rojo,
  Verde,
  Azul,
}

let color: Colores = Colores.Rojo;
console.log(color); // 0

enum Colores2 {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}

let color2: Colores2 = Colores2.Rojo
console.log(color2); // "rojo"

// Ejemplo de enum con una función

enum Operadores {
  suma,
  resta,
  multiplicacion,
  division,
}

function calculadora(a: number, b: number, operacion: Operadores): number {
  if (operacion === Operadores.suma) {
    return a + b;
  } else if (operacion === Operadores.resta) {
    return a - b;
  } else if (operacion === Operadores.multiplicacion) {
    return a * b;
  } else if (operacion === Operadores.division) {
    return a / b;
  } else return 0;
}

console.log(calculadora(3, 4, Operadores.resta)); // -1

// * Generics
// Es un tipo de dato que nos permite crear tipos de datos genericos
// Podemos verlo como un parametro adicional que vamos a utilizar en la funcion o en el tipo
// para indicar el valor de x dato

// Le indico que el dato "generico" es T

function devolver<T>(array: T[]): T {
  return array[0];
}

const resultado = devolver<string>(["hola", "adios", "buen dia"]);
const resultado2 = devolver<number>([10, 20, 30]);

// Generics en interfaces:
interface Persona2<T> {
  name: string;
  hobbies: T[];
}

const nuevaPersona: Persona2<string> = {
  name: "Agustin",
  hobbies: ["videojuegos", "manga", "programar"],
};

// Gnerics en tipos
type RespuestaServer<Data> = {
  data: Data;
  isError: boolean;
};

type PedidoProductos = RespuestaServer<{
  name: string;
  quantity: number;
  price: number;
}>;

type PedidoUsuarios = RespuestaServer<{ name: string; age: number }>;

/*
  Tenemos dos formas de utilizar arrays como tipo de dato:
  string[] o Array<string> 
  number[] o Array<number>
  boolean[] o Array<boolean>
*/

// * readonly
// Podemos hacer que una variable (solo que contenga arrays o tuples) sea de solo lectura (no sea modificable)
let nuevosHobbies: readonly string[] = ["videojuegos", "manga", "programar"];
// nuevosHobbies[1] = "cocinar";
// nuevosHobbies.sort();

// Podemos utilizar el readonly para definir un type / interface
type readonlyPerson = {
  readonly name: string;
  readonly age: number;
};

// * Classes con TypeScript
class Developer {
  nombre: string; // <-- Es public por defecto
  public edad: number;
  private conocimientos: string[];

  constructor(nombre: string, edad: number, conocimientos: string[]) {
    this.nombre = nombre;
    this.edad = edad;
    this.conocimientos = conocimientos;
  }

  public presentacion(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

  public conocimientosDisponibles(): void {
    console.log(this.conocimientos);
  }

  private metodoPrivado(): void {
    console.log("Solo ejecutable desde metodo publico");
  }

  public llamarMetodoPrivado(): void {
    this.metodoPrivado();
  }
}

const newDeveloper = new Developer("Agustin", 22, ["Javascript", "Typescript"]);
console.log(newDeveloper.nombre); // Agustin
// console.log(newDeveloper.conocimientos);
newDeveloper.conocimientosDisponibles(); // [Javascript, Typescript]
// newDeveloper.metodoPrivado();
newDeveloper.llamarMetodoPrivado(); // Solo lo puede ver la clase Developer

// * Utility Types
// Facilitan la transformacion de tipos o interfaces

// * Partial<Type>
// Convierte todos los campos de un objeto en opcionales
type partialPersona = Partial<Persona>;

// Todos los utility types se pueden usar de forma "directa"
const personaParcial: Partial<Persona> = {
  idioma: "español",
};

// * Readonly<Type>
// Convierte todos los campos de un objeto en solo lectura
type readonlyPersona = Readonly<Persona>;

// * Required<Type>
// Convierte todos los campos de un objeto en obligatorios
type requiredPersona = Required<Persona>;

// * Pick<Type, Keys>
// Seleccionamos que propiedades del tipo o interface queremos que contenga
type pickPersona = Pick<Persona, "nombre" | "edad">;

// * Omit<Type, Keys>
// Seleccionamos que propiedades del tipo o interface no queremos que contenga
type omitPersona = Omit<Persona, "nombre" | "edad">;
