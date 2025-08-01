// /*-----SINCRONIA-----*/

// console.log("pasos para coser");
// console.log("Primera puntada");
// console.log("Pasá la aguja por delante y por atrás");
// console.log("Coser");
// console.log("Repetí el proceso");
// console.log("Terminá la puntada");

// /*-----ASINCRONIA-----*/

// console.log("Hacer un proyecto");

// console.log("Encercer pc");
// console.log("Abrir Visual Code");

// setTimeout(() => {
//   console.log("Empezar a programar");
// }, 2000);

// console.log("Tener errores de programación");

// setTimeout(() => {
//   console.log("Revisar codigpo ");
// }, 6000);

// setTimeout(() => {
//   console.log("Ver tutoriales");
// }, 3000);

// setTimeout(() => {
//   console.log("Terminar proyecto");
// }, 10000);

/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});

async function promesa() {
  try {
    let estudiantes = await listaEstudiantes;
    console.log(estudiantes);
  } catch (error) {
    console.log("El servidor se ha caído");
  }
}

 // Función para mostrar los aprobados
    async function mostrarAprobados() {
      try {
        const lista = await listaEstudiantes;
        const contenedor = document.getElementById("contenedor");

        lista.forEach(est => {
          const promedio = est.notas.reduce((a, b) => a + b, 0) / est.notas.length;
          if (promedio >= 51) {
            contenedor.innerHTML += `<p>${est.nombre} - Promedio: ${promedio.toFixed(1)}</p>`;
          }
        });
      } catch {
        document.getElementById("contenedor").innerHTML = "<p>Error: El servidor se ha caído</p>";
      }
    }

    // Llamar a la función
    mostrarAprobados();
