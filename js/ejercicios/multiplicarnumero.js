const pantalla = document.getElementById("pantalla");
const num = prompt("Ingresa tu numero favorito")
const diez = 10;
const res = parseInt(num) * diez;
console.log(`El resultado de la multiplicacion es: ${res}`);

pantalla.innerHTML = `El resultado de la multiplicacion es: ${res}`;

