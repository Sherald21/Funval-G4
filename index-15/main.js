/**ARRAYS*/

//COMO SE DECLARAN ARRAYS

//let nuevoArray = ["Kevin", "Pablo", "Johan", "Geraldine", "Gabriel"];
// acceder a los valores de un array
//console.log(nuevoArray[3]);
//nuevoArray[0] = "Andrew";
//console.log(nuevoArray);

/*METODOS BASICOS DE LOS ARRAYS*/
//agregar con push al final del array
//let = contador = nuevoArray.push("Yamila");
//console.log ("Yamila")
//console.log("Consolador");

//Agregar con unshift al comiendo del array
//nuevoArray.unshift("Benjamin", "Douglas");
//console.log(nuevoArray);

//metodos para eliminar elementos de un array
//let ultimoEstudiante = nuevoArray.pop();
//let primerEstudiante = nuevoArray.shift();

//console.log(nuevoArray);
//console.log(ultimoEstudiante);
//console.log(primerEstudiante);

/* Metodos importante!!*/
//let largo = nuevoArray.length;
//console.log(largo);
//console.log(nuevoArray);

/*Array que veo array que itero*/
/*for (let index = 0; index < nuevoArray.length; index++) {
  const element = array[index];
}*/

/*Las notas de un estudiantes de funval estan dentro de un 
array ejemplo 
let notas = [32,100,25,78]
let notas = [32,100,10,8,0]
let notas = [32]
let notas = [32,77]
 debemos sacar el pr 
 realizar una funcion que reciba un array y nos retorna
 el promedio de las notas de un estudiante*/

/* REVISAR EJERCICIO OTRA VEZ
let notas = [32, 100, 25, 78];
let promedio = calcularPromedio(notas);

function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

promedio = suma / notas.length;
return promedio;
}

console.log("El promedio es:", promedio);
*/

let matriz = [
  [28, 39, 90, 89],
  [70, 32, 28, 18],
  [10, 0, 15, 31],
  [11, 23, 45, 67],
];
/* realizar la suma y mostrar el total de la diagonal
princial pero usando solo un for*/

let sumaDiagonal = 1;

for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i];
}
console.log("La suma de diagonales es: ", sumaDiagonal);

/*Declaracion y creacion de objetos*/

/*let estudiante = {
  nombre: "Geraldine",
  edad: 26,
  nacionalidad: "Perú",
  esMiembro: true,
  numeroCuenta: 123456798,
};
*/
/*Como accedemos a valores dentro de los objetos*/
/*console.log(estudiante.nombre);
estudiante.nacionalidad = "Chile";*/
/*como creamos llaves nuevas*/
/*estudiante.genero = "Masculino";
console.log(estudiante); */

/* --------------------------------- */
let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts */

/* for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
} */

for (let index = 0; index < listaEstudiantes.length; index++) {
  if (listaEstudiantes[index].nacionalidad === "Argentina") {
    console.log(listaEstudiantes[index].nombre);
  }
}
