console.log("Guía JavaScript iniciada");

const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

// Ejecicio 2

let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeTotal = puntosBase + (bonus - penalizacion);

console.log("Puntaje total:", puntajeTotal);

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  // Convertir valor a número
  // Sumar 10
  // Mostrar el resultado en pantalla

  const numero = Number(valor);
  const resultado = numero + 10;

  mensaje.textContent = "El resultado es: " + resultado;
});
