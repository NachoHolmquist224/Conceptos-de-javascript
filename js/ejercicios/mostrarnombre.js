//Como pedir un dato al usuario y mostrarlo por consola
const nombre = prompt("Ingresa tu nombre");
const Apellido = prompt("Ahora ingresa tu apellido");
console.log("Hola " + nombre + " " + Apellido);

//mostrar un mensaje al usuario
//alert("Tu nombre y apellido es: " + nombre + " " + Apellido);

document.writeln(`<p> "Tu nombre y apellido es: ${nombre} ${Apellido}" </p>`)
