const largo = prompt("Ingresa el largo del rectangulo");
const ancho = prompt("Ingresa el ancho del rectangulo");
const perimetro = 2 * (parseInt(largo) + parseInt(ancho));
const area = parseInt(largo) * parseInt(ancho);
console.log(`El perimetro del rectangulo es: ${perimetro}`);
console.log(`El area del rectangulo es: ${area}`);

document.writeln(`<p>El perimetro del rectangulo es: ${perimetro}<br> El area del rectangulo es: ${area}</p>`)