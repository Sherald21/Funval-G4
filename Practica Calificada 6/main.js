let saldo = 0;
let opcion;

function mostrarMenu() {
  return prompt(
    "=== Cuenta Bancaria ===\n" +
      "1. Ingresar dinero\n" +
      "2. Retirar dinero\n" +
      "3. Consultar saldo\n" +
      "4. Salir\n" +
      "Selecciona una opción:"
  );
}

function ingresarDinero() {
  let monto = parseFloat(prompt("¿Cuánto deseas depositar?"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  saldo += monto;
  alert(`Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
}

function retirarDinero() {
  let monto = parseFloat(prompt("¿Cuánto deseas retirar?"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  if (monto > saldo) {
    alert("Saldo insuficiente.");
    return;
  }
  saldo -= monto;
  alert(`Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
}

function consultarSaldo() {
  alert(`Tu saldo actual es: $${saldo.toFixed(2)}`);
}

// Bucle principal del programa
while (true) {
  opcion = mostrarMenu();

  if (opcion === "4") {
    alert(" Gracias por usar tu cuenta bancaria. ¡Hasta pronto!");
    break;
  }

  switch (opcion) {
    case "1":
      ingresarDinero();
      break;
    case "2":
      retirarDinero();
      break;
    case "3":
      consultarSaldo();
      break;
    default:
      alert("Opción inválida. Intenta nuevamente.");
  }
}
