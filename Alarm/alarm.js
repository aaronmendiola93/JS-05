// Preguntamos al usuario la cantidad de segundos
var segundos = parseInt(prompt("Ingresa la cantidad de segundos para la alarma:"));

// Verificamos si se ingresó un número válido
if (!isNaN(segundos) && segundos >= 0) {
  // Calculamos la hora en la que se ejecutará la alarma
  var horaEjecucion = new Date();
  horaEjecucion.setSeconds(horaEjecucion.getSeconds() + segundos);

  // Mostramos un mensaje de confirmación
  alert("La alarma se ejecutará en " + segundos + " segundos.");

  // Configuramos la función que se ejecutará después de 'segundos' segundos
  setTimeout(function () {
    alert("¡Alarma! Han pasado " + segundos + " segundos.");
  }, segundos * 1000); // Multiplicamos por 1000 para convertir segundos a milisegundos
} else {
  alert("Ingresa un número válido de segundos.");
}
