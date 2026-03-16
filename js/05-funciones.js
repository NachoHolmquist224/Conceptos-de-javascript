// Function tradicional sin parametros

function saludar(){
    const pantalla = document.getElementById("pantalla")
    pantalla.innerHTML += "<p>Hola Mundo 🌎</p>"
}

// Function con parámetros

function saludarpersona(nombre, edad){
    const pantalla = document.getElementById("pantalla")
    pantalla.innerHTML += `<p>Hola ${nombre}</p>`
    console.log("Edad:" + edad)
}

// Function con retorno

// function aplicardescuento(precio, descuento){
//     const preciofinal = precio - (precio * (descuento / 100))
//     return preciofinal
//     // !NO SE AGREGA MAS CODIGO DEBAJO DE UN RETURN
// }

// Arrow function

const aplicardescuento = (precio, descuento) => precio - (precio * (descuento / 100));

// invocar o llamar a la función
saludar()
saludar()
saludar()

const nombre = prompt("Ingrese su nombre")
const edad = parseInt(prompt("Ingrese su edad"))
const precio = parseFloat(prompt("Ingrese el precio del producto"))
const descuento = parseFloat(prompt("Ingrese el descuento del producto"))

saludarpersona(nombre, edad)

// aplicardescuento(precio, descuento)

// const preciofinal = aplicardescuento(precio, descuento)

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML += `<p>El precio del producto es $${precio}, con el descuento del ${descuento}%, el precio final es de $${aplicardescuento}</p>`