let opcion;

while (true) {
  opcion = prompt(
    "Calculadora de Áreas\n" +
      "1. Área de un Cuadrado\n" +
      "2. Área de un Rectángulo\n" +
      "3. Área de un Triángulo\n" +
      "4. Salir\n" +
      "Ingresa una opción:"
  );

  if (opcion === "4") {
    alert("¡Hasta luego!");
    break;
  }

  switch (opcion) {
    case "1": {
      let lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
      if (isNaN(lado) || lado <= 0) {
        alert(" Lado inválido.");
        break;
      }
      let area = lado * lado;
      alert(`El área del cuadrado es: ${area}`);
      break;
    }

    case "2": {
      let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
      let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
      if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Base o altura inválida.");
        break;
      }
      let area = base * altura;
      alert(`✅ El área del rectángulo es: ${area}`);
      break;
    }

    case "3": {
      let base = parseFloat(prompt("Ingresa la base del triángulo:"));
      let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
      if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Base o altura inválida.");
        break;
      }
      let area = (base * altura) / 2;
      alert(`✅ El área del triángulo es: ${area}`);
      break;
    }

    default:
      alert("Opción inválida. Intenta nuevamente.");
  }
}
