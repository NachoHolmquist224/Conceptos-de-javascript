const pantalla = document.getElementById("pantalla");
const nombre = prompt("Ingresa tu nombre");
const Apellido = prompt("Ahora ingresa tu apellido");
console.log("Hola " + nombre + " " + Apellido);

pantalla.innerHTML = `Tu nombre y apellido es: ${nombre} ${Apellido}`;
