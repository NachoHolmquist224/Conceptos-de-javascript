function mostrarpeliculas(nota) {
  pantalla.innerHTML += `<h2>Lista de Peliculas (${peliculas.length})</h2>`;
  pantalla.innerHTML += `<p>Notas: (${nota})</p>`;

  lista = "<ul>";
  for (i = 0; i < peliculas.length; i++) {
    lista += `<li>${i}- ${peliculas[i]}</li>`;
  }
  lista += "/<ul>";

  pantalla.innerHTML += lista;
}

// Como declarar un array vacío

const array = [];

// Como declarar un array con datos

const peliculas = ["Rapido y Furioso", "Shrek", "Shrek 2", "Shazam", "Venom", "El lorax"];

console.log(typeof peliculas);

// Cuantos elementos tiene un array

const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>El array tiene ${peliculas.length} peliculas</p>`;

// Como no mostrar un array

pantalla.innerHTML += peliculas;

// Mostrar los elementos de un array en lista
mostrarpeliculas("Array original");

// Acceder a un elemento de un array

pantalla.innerHTML += `El elemento 3 del array es: ${peliculas[2]}`;

// Operaciones normales en un array

// Agregar un elemento a un array

peliculas.unshift("La vida es bella");
mostrarpeliculas("Agregamos La vida es bella al principio del array con unshift");

peliculas.push("Matilda");
mostrarpeliculas("Agregamos Matilda al final del array con push");

peliculas.splice(4,0, "El espanta tiburones");
mostrarpeliculas("Agregamos El espanta tiburones en la posicion 4 del array con splice");

// Modificar elementos de un array

peliculas[3] = "Intensamente"
mostrarpeliculas("Modificamos el elemento 3 del array")

// Eliminar elementos de un array

peliculas.shift()
mostrarpeliculas("Eliminamos el primer elemento del array con shift")

peliculas.pop()
mostrarpeliculas("Eliminamos el ultimo elemento del array con pop")

peliculas.splice(3,1) // Si no le indicamos la cantidad borra todo desde la posicion 3
mostrarpeliculas("Eliminamos el elemento 3 del array con splice")

// Filtrar elementos de un array

console.log(peliculas[1].includes("Shrek"));
console.log(peliculas[1].includes("Shrek"));

const sagashrek = peliculas.filter((pelicula)=> pelicula.includes("Shrek"));
console.log(sagashrek);