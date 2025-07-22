/* MOSTRAR ELEMENTOS EN CONSOLA */
console.log("hola mundo");
/* CREACION O DECLARACION DE VARIABLES */

let nombreVariable = "el valor asociado"; /* alcance en bloque */
var nombreVar = "el valor"; /* NO SE USA ALCANCE GLOBAL*/

const nombreConst = "el valor de la constante";

/* FORMAS CORRECTAS DE CREAR VARIABLES */

/* let 2variable */
/* let #variable */
/* let $nombrevar = 1;
let _contador = 322;
let nombre;
let apellidoPaterno; */

/* TIPOS DE DATOS PRIMITIVOS */
/* String 
let nombre = "Kevin";
let NOMBRE = "Andrew";
let apellidos = `Rodriguez`;
// Numerico 
let edad = 28;
// Booleano
let masculino = true;
let miembro = true;
// caracter q en js es lo mismo q String 
let caracter = "k";
// Undefined 
let aprobado;
// Null 
let reprobado = null;
// Big int 
let numeroGrande = 2138762349843560439682873123123132n;
let grandeeeee = BigInt("1273123789127398123");
// Simbolo 
let simbolo = Symbol("kevin");
// uso de Strings 
let cantidad = nombre.length;
console.log(cantidad);
// VERIFICAR EL TIPO DE DATO  DE UNA VARIABLE 
console.log(typeof simbolo); */

/* OPERADORES */
let a = 2;
let b = 7;
let estudiante = "Geraldine";
let apellidoEstudiante = "Revilla";
let NombreCompleto;
let resultado;
/* Suma */
resultado = a + b;
NombreCompleto = estudiante + " " + apellidoEstudiante; /* Concatenacion */
//console.log(NombreCompleto);
/* Resta */
resultado = a - b;
/* divison */
resultado = a / b;
/* multiplicacion */
resultado = a * b;
/* Potencia */
resultado = a ** b;
/* Modulo */
resultado = a % b;

/* OPERADORES DE COMPARACION dato IMPORTANTE EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO */
let comparacion;
comparacion = a != b; //verifica q sean diferentes
comparacion = a !== b; //verifica q sean diferentes pero tambien diferentes en el tipo de dato
comparacion = a == b; // verifica si es valor es igual sin ver el tipo d dato
comparacion = a === b; // verifica tambien el tipo de dato deben ser del mismo tipo de dato primitivo
comparacion = a > b;
comparacion = a < b;
comparacion = a <= b;
comparacion = a >= b;

/* OPERADORES LOGICOS EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO*/
/* AND &&*/
a = 2;
b = 7;
let logico;
logico = a <= b && a <= b; //true5   false1
/* OR || */
logico = a === b || a >= b; //false
/* NOT */
logico = !(a === b);
console.log(logico);

//1. Escruve un comentario en una línea
//Soy un comentario de una linea

//2. Escribe un comentario en varias lineas
/*Soy un comentario
de muchas
y muchas 
lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
/* String */
let nombre = "Geraldine";
/* Numerico */
let edad = 26;
/* Booleano */
let femenino = true;
/* caracter q en js es lo mismo q String */
let caracter = "g";
/* Undefined */
let estadoCivil;
/* Null */
let reprobado = null;
/* Big int */
let numeroGrande = 2138762349843560439682873123123132n;
let grandeeeee = BigInt("1273123789127398123");
/* Simbolo */
let simbolo = Symbol("$$$");

// 4. Imprimie por consola el valor de todas las variables
console.log(nombre);
console.log(edad);
console.log(femenino);
console.log(caracter);
console.log(estadoCivil);
console.log(reprobado);
console.log(numeroGrande);
console.log(simbolo);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof femenino);
console.log(typeof caracter);
console.log(typeof estadoCivil);
console.log(typeof reprobado);
console.log(typeof numeroGrande);
console.log(typeof simbolo);

// 6. modifica los valores de las varialbes por otros del mismo tipo

nombre = "Joseph";
edad = 28;
femenino = false;
caracter = "J";
estadoCivil;
reprobado = null;
numeroGrande = 788538762349843560439682873123123132;
simbolo = "&&&";

// 7 Modifica los valores de las variables por otros del mismo tipo

nombre = 123456;
edad = "Grego";
femenino = 123;
caracter = "No es caracter";
numeroGrande = "788538762349843560439682873123123132";
simbolo = true;

// 8. Declara constantes con valores asociados a toods los tipos de datos primitivos
const female = true;
const ciudad = "Peru";
const añoNac = 1999;

//9 A continuacion, modifica los valores de las constantes;
//No se puede porque son constantes

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
//const female = false;

/* OPERADORES LOGICOS */

// 1. Crea una variable para cada operacion aritmetica

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;

//2. Crea una variable para cada tipo de operacion de asignacion
// que haga uso de las variables utilizadas para las operaciones aritmeticas

let x = 5;
x += 5; // equivalente a: x = x + 5
x -= 3; // equivalente a: x = x - 3
x *= 2; // equivalente a: x = x * 2
x /= 5; // equivalente a: x = x / 5
x %= 2; // equivalente a: x = x % 2
x **= 4; // equivalente a: x = x ** 4

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

x = 10;
y = 5;

comparacion = y <= x;
comparacion = x >= y;
comparacion = x !== y;
comparacion = y < x;
comparacion = x >= y;

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

comparacion = y >= x;
comparacion = x <= y;
comparacion = x == y;
comparacion = y > x;
comparacion = x <= y;

//5. Utiliza el operador logico and
let operador;
operador = x > y && x <= y;

//6. Utiliza el operador logico or
operador = x != y || x <= y; //false

//7. Combina ambos operadores logicos

let tienePermiso = true;
let esMayor = false;

//8 Añade alguna negación

//93 Utiliza el operador tenario

//10. Combina operadores aritmeticos, de comparación y logicas

let usser = "admin";
let password = 123456;

usser === "admin" && password === 123456
  ? console.log("Datos correctos")
  : usser !== "admin" && password !== 123456
  ? console.log("Ambos datos incorrectos")
  : usser !== "admin"
  ? console.log("El usuario es incorrecto")
  : console.log("La contraseña es incorrecto");
