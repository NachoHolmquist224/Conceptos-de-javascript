const frase = prompt("ingrese una frase:");
console.log(frase.toLocaleLowerCase());
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `Las vocales de la palabra "${frase}" son: `;

for (let i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    pantalla.innerHTML += frase.charAt(i);
  }
}
