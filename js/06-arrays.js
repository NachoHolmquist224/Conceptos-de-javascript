// Como declarar un array vacío

const array = [];

// Como declarar un array con datos

const arraycondatos = [1, 2, "tres", 4.5, "cinco"];

console.log(typeof arraycondatos)

// Cuantos elementos tiene un array

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML = `<p>El array tiene ${arraycondatos.length} elementos</p>`

// Como no mostrar un array

pantalla.innerHTML += arraycondatos

// Mostrar los elementos de un array en lista

pantalla.innerHTML += "<h2>Lista de elementos (5)</h2>"

let lista = "<ul>"
for(i=0; i<arraycondatos.length; i++){
    lista += `<li>${arraycondatos[i]}</li>`
}
lista += "/<ul>" 

pantalla.innerHTML += lista

// Formas de acceder a un elemento de un array

pantalla.innerHTML += `El elemento 3 del array es: ${arraycondatos[2]}`

// Agregar un elemento a un array

arraycondatos.unshift("23")

pantalla.innerHTML += "<h2>Lista de elementos (6)</h2>"

lista = "<ul>"
for(i=0; i<arraycondatos.length; i++){
    lista += `<li>${arraycondatos[i]}</li>`
}
lista += "/<ul>" 

pantalla.innerHTML += lista