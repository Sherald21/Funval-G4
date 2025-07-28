/* 
        ustedes tienen un boton q va alternar entre dia y noche <
        y abajo tendran una imagen de fiona si el boton esta en dia fiona es princesa
        pero si el boton esta en noche fiona es un ogro

let boton = document.querySelector("#btn");
let img = document.querySelector("#img");

let esDia = true;

boton.addEventListener("click", () => {
  esDia = !esDia;
   sera ejecutado solamente cuando el evento ocurra 
  if (esDia) {
    btn.textContent = "Cambiar a noche";
    btn.classList.add("bg-yellow-500");
    btn.classList.remove("bg-blue-500");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53YYwgJ-APdXX4dCKwaHOf3BflsYpqOD8sQ&s";
  } else {
    btn.classList.remove("bg-yellow-500");
    btn.classList.add("bg-blue-500");
    btn.textContent = "Cambiar a día";
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQQgZXiypXKd2Pg7i35nppqzh_ZWurck78VoTIv-1Yn_wNobqGBcr64NbJXOcM2puyTE";
  }
});*/

/* -----------------SUBMIT--------------------- */
/* let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  let nombre = document.querySelector("#Nombre");
  console.log("formulario enviado por : " + nombre.value);
  obj.name = nombre.value;
  obj.apellido = "Aguilar";
  console.log(obj);
}); */
/* ----------------input--------------- */
/*let inputText = document.querySelector("#campo");
let parrafito = document.getElementById("resultadoInput");
inputText.addEventListener("input", function (e) {
  console.log(e.target.value);
  parrafito.textContent = e.target.value;
});*/

/* 
 crear un formulario donde pidan el 
 nombre 
 el apellido paterno 
 la edad y la nacionalidad y 
 agregarlo a un objeto y mostrar el objeto en consola
*/
/* ----------Change------------ */
/* ----------Change------------ */
/*let contador = 0;
let anterior = "";
let opcionColor = document.querySelector("#selectorColor");

opcionColor.addEventListener("change", function (e) {
  let parrafo = document.querySelector("#colorTexto");
  if (contador === 0) {
    parrafo.classList.add(`text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  } else {
    parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
  }
});*/

const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const guardar = document.getElementById("guardar");
const modal = document.getElementById("modal");
const tabla = document.getElementById("tablaEstudiantes");

abrirModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

guardar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const nacionalidad = document.getElementById("nacionalidad").value.trim();

  if (nombre && edad && nacionalidad) {
    const fila = document.createElement("tr");
    fila.classList.add("bg-white", "border-b");

    fila.innerHTML = `
          <td class="px-4 py-2">${nombre}</td>
          <td class="px-4 py-2">${edad}</td>
          <td class="px-4 py-2">${nacionalidad}</td>
        `;

    tabla.appendChild(fila);

    // Limpiar campos y cerrar modal
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nacionalidad").value = "";
    modal.classList.add("hidden");
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
