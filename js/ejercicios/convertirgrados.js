const pantalla = document.getElementById("pantalla");
const fahrenheit = prompt("Ingresa la temperatura en F°");
const celcius = (5/9)*(fahrenheit-32)
console.log(`La temperatura en C° es: ${celcius}`);

pantalla.innerHTML = `La temperatura en C° es: ${celcius}`;
