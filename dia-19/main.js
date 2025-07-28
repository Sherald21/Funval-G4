/*let estudiante = {
  nombre: "Juan",
  edad: 28,
  nacionalidad: "Bolivia"
};

let mensaje = 'Hola${
  estudiante.nombre === "Kevin" ? "Pablo": estudiante.nombre
}edad ${estudiadnte.nombre} de nacionalidad ${estudiante.nacionalidad}';
console.log(mensaje)*/

/* 
    crear una funcion para renderizar una lista de estudiantes 
    esta funcion debera recibir un estudiante a la vez y mostrarlo
*/
let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];

function mostrarEstudiante(estudiante) {
  let {
    nombre = "Sin nombre",
    pais = "Desconocido",
    edad = "No especificada",
    mision = false,
  } = estudiante;

  console.log(` Nombre: ${nombre}`);
  console.log(` País: ${pais}`);
  console.log(` Edad: ${edad}`);
  console.log(` Misión: ${mision ? "Sí" : "No"}`);
  console.log("--------------");
}

// Recorremos cada estudiante
estudiantesFunval.forEach(mostrarEstudiante);

for (let i = 0; i < estudiantesFunval.length; i++) {
  mostrarEstudiante.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${productos[i].nombre}</h5>
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <p class="font-normal text-gray-700 dark:text-gray-400">Precio: ${productos[i].pais}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Stock: ${productos[i].edad}</p>
                 <p class="font-normal text-gray-700 dark:text-gray-400">Stock: ${productos[i].mision}</p>
                <button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none">Comprar</button>

            </a>
            `;
}
