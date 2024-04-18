/*
Antes de arrancar a crear una base de datos desde 0, comencemos respondiendo lo siguiente:

- "Que es una base de datos?"
* Una base de datos es un lugar donde guardamos informacion, tales como como los usuarios registradosen nuestra pagina web, 
los productos que vendemos, etc.

- "Y que es una base de datos relacional?"
* Cuando hablamos de una base de datos relacional, queremos decir que todo nuestro contenido en nuestra base de datos 
va a estar, de una u otro forma, conectado (ejemplos más adelante)

- "Y SQL?"
*  SQL (Structured Query Language) es el lenguaje que utilizamos para manejar estas bases de datos relacionales. 
Independientemente del gestor que utilicemos (MySQL, PostgresSQL, MariaDB, SQLite, etc), las peticiones serán similares, 
ya que todas estas son SQL. 

- "De que forma se almacena la informacion en una base de datos SQL?"
* La informacion se almacena en "tablas", cada una de estas representa un elemento en concreto, como pueden ser usuarios, 
productos, publicaciones, etc.
Cada una de estas "tablas" está formada por "columnas" y "filas", cada "columna" nos indica  que propiedad de un dato estamos viendo 
y cada "fila" nos indica cada dato completo por separado.

* Por ejemplo, una tienda estilo amazon:

- USUARIOS
    ID  |  Nombre   | Edad  <-- La propiedad que representa cada columna
    1   |  Simon    | 21    <-- Primer dato
    2   |  Walter   | 52    <-- Segundo dato
    3   |  Gustavo  | 34    <-- Tercer dato

- Productos
    ID |  Nombre             |  Precio |  Usuario_id   <-- USUARIO_ID nos dice que usuario vende el producto
    1  |  iPhone 12          |  1000   |  2
    2  |  Guitarra           |  150    |  3
    3  |  play 2 chipeada    |  200    |  1

En el ejemplo de arriba, relacionamos cada producto con un usuario.

Siguiendo con la teoria, en las tablas anteriores, tenemos dos conceptops muy importantes:

- PRIMARY KEY (PK)
- FOREIGN KEY (FK)

* PK
- La primary key (llave primaria) es el valor unico de que dato en una tabla, o sea, su ID. Este dato es OBLIGATORIO y es lo que
nos permite diferenciar entre un dato y otro.

* FK
- La foreign key (llave "extranjera") es el valor con el cual relacionamos un dato de un tabla, al dato de otra. Normalmente,
esta foreign key es el ID de un dato de una tabla externa, por ejemplo, el "usuario_id" en la tabla de productos.

Sabiendo esto, tenemos varias formas de relaciones, las cuales son:

- 1 a 1
- 1 a N
- N a N

* 1 a 1
- Como su nombre indica, 1 a 1, hace referencia a que la relacion entre dos datos de distintas tablas solo es de UNO como maximo, 
por ejemplo, que un usuario solo pueda comprar UN producto y que a un producto solo lo pueda comprar UN usuario.

* 1 a N
- N hace referencia a muchos. 1 a N nos quieres decir que el dato de una tabla, solo puede relacionarse con UN dato de otra, 
mientras que el dato de la otra tabla podria relacionarse con muchos datos de la primera.
Por ejemplo, que un usuario pueda comprar MUCHOS productos, mientras que a un producto solo lo puede comprar UN usuario.

* N a N
- N a N nos indica que un dato de una tabla puede relacionarse con MUCHOS datos de otra tabla y viceversa.
Por ejemplo, que un usuario pueda comprar MUCHOS productos y a un producto puedan comprarlo MUCHOS usuarios.

*/

-- EMPECEMOS CREANDO LA BASE DE DATOS (solo si usamos un gestor de base de datos y no sqliteonline)
CREATE DATABASE gamestore; -- Importante terminar con ;

-- Ahora vamos a ver nuestra lista de bases de datos
SHOW DATABASES;

-- Seleccionamos la base de datos que queremos usar
USE gamestore;

/*
Comencemos a rellenar nuestra base de datos con tablas. Pero antes, un listado de algunos tipos de datos 
con los que podemos rellenar las columnas:

    * VARCHAR(n) - Cadena de texto con n caracteres maximos (Maximo 255)
    * CHAR(n) - Cadena de texto con n caracteres (los caracteres no usados, se rellenan con espacios vacios) (Maximo 255)
    * INT - Numero entero 
    * INTEGER - Lo mismo que INT, pero en SQLite solo INTEGER permite AUTOINCREMENT
    * FLOAT - Numeros flotantes con muchos decimales
    * DECIMAL(maximoDigitos, decimales) - Numero decimal
    * DATE - Fecha en formato "YYYY-MM-DD"
    * TIME - Hora en formato "HH:MI:SS"
    * DATETIME o TIMESTAMPS - Fecha con hora
    * BOOLEAN
    * TEXT

    * SERIAL - Este es un tipo de dato numerico autoincremental de postgresql, normalmente usado para los id
*/

-- Primero creamos las tablas independientes

CREATE TABLE videojuegos (
    videojuegoID SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    plataforma VARCHAR(50),
    precio DECIMAL(10, 2),
    rating INT
);

-- Se me olvidó agregar su fecha de salida! La voy a agrerar modificando la tabla
ALTER TABLE videojuegos ADD COLUMN fechaSalida DATE;

ALTER TABLE videojuegos
ALTER COLUMN rating SET DATA TYPE DECIMAL(5, 2)

CREATE TABLE usuarios (
    usuarioID SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Insertamos datos en la tabla videojuegos

-- Podemos especificar que posicion corresponde a cada propiedad
INSERT INTO videojuegos (videojuegoID, Titulo, Plataforma, Precio, Rating, fechaSalida) 
VALUES (1, 'The Legend of Zelda: Breath of the Wild', 'Nintendo Switch', 59.99, 96, '2017-03-03');

-- Si insertamos todos los datos, las propiedades no hacen falta
INSERT INTO videojuegos 
VALUES(2, 'Persona 3 Portable', 'Multiplataforma', 19.99, 80, '2009-11-01');

-- Insertar varios datos al mismo tiempo
INSERT INTO videojuegos (videojuegoID, Titulo, Plataforma, Precio, Rating, fechaSalida)
VALUES
(3, 'Hollow Kinght', 'Multiplataforma', 14.99, 90, '2017-02-24'),
(4, 'The Binding of Isaac', 'PC', 49.99, 100, '2011-09-28'),
(5, 'ELDEN RING', 'Multiplataforma', 59.99, 90, '2022-02-25');

-- Insertamos datos en la tabla usuarios
INSERT INTO usuarios VALUES
(1, 'David', 'david@gmail.com'),
(2, 'Juan', 'juan@gmail.com'),
(3, 'Julia', 'Julia@gmail.com');

-- Vamos a ver como quedaron las tablas!

-- Seleccionamos todas las columnas de videojuegos
SELECT * FROM videojuegos;
-- Seleccionamos todas las columnas de usuarios
SELECT * FROM usuarios;

-- Vamos a crear la tabla que une a videojuegos y usuarios y a insertar contenido

CREATE TABLE compras (
    compraID SERIAL PRIMARY KEY,
    videojuegoID INT NOT NULL,
    usuarioID INT NOT NULL,
    cantidad INT NOT NULL,
    fechaCompra DATE NOT NULL,
    CONSTRAINT fk_videojuegos FOREIGN KEY(videojuegoID) REFERENCES videojuegos(videojuegoID),
    CONSTRAINT fk_usuarios FOREIGN KEY(usuarioID) REFERENCES usuarios(usuarioID)
);
/*
En MySQL, por ejemplo, no se utilizan los "CONSTRAINT", para crear las foreign keys seria de la siguiente forma:
    FOREIGN KEY (videojuegoID) REFERENCES videojuegos(videojuegoID),
    FOREIGN KEY (usuarioID) REFERENCES usuarios(usuarioID)
*/

INSERT INTO compras (videojuegoID, usuarioID, cantidad, fechaCompra) 
VALUES 
(5, 3, 1, '2024-02-22'),
(1, 2, 1, '2024-02-24'),
(4, 1, 3, '2024-02-26'),
(2, 3, 2, '2024-02-29');

-- Vamos a ver como funciona select

-- Traemos solo titulo y rating de videojuegos
SELECT titulo, rating FROM videojuegos;

SELECT titulo, rating as Calificacion FROM videojuegos;

-- Traemos solo el titulo de los videojuegos con nota de 95 o más
-- Con WHERE podemos añadir logica para decidir que condiciones deben cumplir los datos
SELECT titulo, rating FROM videojuegos WHERE rating >= 95; 

SELECT videojuegoID, titulo, rating FROM videojuegos WHERE videojuegoID = 1;

-- Podemos hacer más de una condición
SELECT titulo, rating, fechaSalida FROM videojuegos WHERE rating >= 95 AND fechaSalida > '2015-01-01'; 

-- Tambien podemos actualizar datos!
UPDATE videojuegos SET precio = 39.99 WHERE videojuegoID = 5;

-- O eliminarlos si hiciera falta
DELETE FROM videojuegos WHERE videojuegoID = 1;
DELETE FROM videojuegos WHERE precio = 39.99;

-- Eliminar multiples datos
DELETE FROM compras
WHERE compraID IN (1, 2, 3);

-- Ahora vamos a realizar busquedas más en profundidad

-- Para limitar resultados
SELECT * FROM videojuegos LIMIT 1

-- Para traer datos si se cumple un requisito U otro
SELECT * FROM videojuegos WHERE rating >= 95 OR fechaSalida < "2010-01-01"

-- Para traer datos si NO cumplen con un requisito
SELECT * FROM videojuegos WHERE rating != 100

-- Para traer datos que estén entre x e y numero
SELECT * FROM videojuegos WHERE rating BETWEEN 90 AND 95

-- Para buscar utilizando texto

-- Valida que titulo CONTENGA 3 en cualquier parte de su texto
SELECT * FROM videojuegos WHERE titulo LIKE "%3%"

-- Valida que titulo COMIENCE con the
SELECT * FROM videojuegos WHERE titulo LIKE "the%"

-- Valida que titulo TERMINE con ng
SELECT * FROM videojuegos WHERE titulo LIKE "%ng"

-- Valida que titulo NO TERMINE con ng
SELECT * FROM videojuegos WHERE titulo NOT LIKE "%ng"

-- Dependiendo el gestor, el like diferencia entre mayusculas y minusculas
SELECT * FROM videojuegos WHERE LOWER(titulo) LIKE "the%"

-- Traemos los datos ordenados por rating y de forma ascendente
SELECT * FROM videojuegos ORDER BY rating ASC

-- Lo mismo de antes pero descendente
SELECT * FROM videojuegos ORDER BY rating DESC

-- Traemos SOLO el juego con mayor rating utilizando order by y limit
SELECT * FROM videojuegos ORDER BY rating DESC LIMIT 1

-- Vamos a ver algunas funciones!
-- Importante, las funciones equivalen a una nueva columna

-- Buscamos el valor maximo utilizando MAX
SELECT MAX(rating) FROM videojuegos
SELECT MAX(rating) AS mayorRating FROM videojuegos

-- Ahora lo contrario con MIN
SELECT MAX(rating) AS mayorRating FROM videojuegos

-- Contamos la cantidad
SELECT COUNT(videojuegoID) AS stock FROM videojuegos

-- Sacamos el promedio
SELECT AVG(rating) as PromedioCalificacion FROM videojuegos

-- Sumamos el total de valores en una columna de INT
SELECT SUM(rating) AS valorTotalRatings FROM videojuegos

-- Sumamos los rating, pero agrupamos las filas por su "titulo" (se juntan las que tengan el mismo titulo)
SELECT titulo, SUM(rating) AS valorTotalRatings FROM videojuegos GROUP BY titulo

-- Ahora vamos a aprender como utilizar más de una tabla a través de nuestra tabla "compras"
-- La "c" y la "u" son el nombre que les damos a las tablas para hacer referencias a ellas en el select
SELECT x.compraID, u.nombre, x.videojuegoID FROM compras x 
LEFT JOIN usuarios u ON x.usuarioID = u.usuarioID;
-- Pero de esta forma solo obtenemos el nombre del usuario pero no del juego

-- Obtendriamos todos los datos de la siguiente forma
SELECT x.compraID, u.nombre, v.titulo, x.cantidad FROM compras x
LEFT JOIN usuarios u ON x.usuarioID = u.usuarioID
LEFT JOIN videojuegos v ON v.videojuegoID = x.VideojuegoID;

-- Vamos a mostrar datos un poco más completos
SELECT x.compraID, u.nombre, v.titulo, x.cantidad, x.cantidad * v.precio AS Total FROM compras x 
LEFT JOIN usuarios u ON u.usuarioID =  x.usuarioID
LEFT JOIN videojuegos v ON v.videojuegoID = x.VideojuegoID;

-- Al utilizar LEFT JOIN la tabla principal es la de "compras", o sea, los resultados nacen de esta
SELECT x.compraID, u.nombre, v.titulo, x.cantidad FROM compras x 
LEFT JOIN usuarios u ON x.usuarioID = u.usuarioID
LEFT JOIN videojuegos v ON v.videojuegoID = x.VideojuegoID;

-- Con RIGHT JOIN, la tabla principal seria le de videojuegos. Así que, traera TODOS los videojuegos
SELECT x.compraID, u.nombre, v.titulo, x.cantidad FROM compras x
RIGHT JOIN usuarios u ON x.usuarioID = u.usuarioID
RIGHT JOIN videojuegos v ON v.videojuegoID = x.VideojuegoID;

-- Con INNER JOIN, si o si debe haber una coincidencia entre las tablas.
SELECT x.compraID, u.nombre, v.titulo, x.cantidad FROM compras x 
INNER JOIN usuarios u ON x.usuarioID = u.usuarioID
INNER JOIN videojuegos v ON v.videojuegoID = x.VideojuegoID;
