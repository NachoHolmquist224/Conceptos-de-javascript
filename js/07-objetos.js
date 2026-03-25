// USUARIO
// Propiedades -> Nombre, apellido, password, dni, email, tel, curso
// Metodos -> cambiarpassword(nuevopassword), actualizarmail(nuevomail), inscribircurso(curso)

//CELULAR
// Propiedades -> Marca, memoria, camara, procesador, precio
// Metodos -> actualizarprecio(nuevoprecio), publicado(true)

//Notacion literal

const pelicula = {
    //propiedades
    titulo : "Super Mario Bros",
    duración : "2:30:00",
    genero : "Infantil",
    elenco : ["actor1", "actor2", "actor3"],    
    añoestreno : 2023,
    //metodos
    reproducir : function(){
        console.log = "Reproduciendo pelicula"
    },
    stop : function(){
        console.log = "Pelicula detenida"
    },
}

console.log(pelicula);
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>${pelicula}</p>`

// Como mostrar las propiedades de un objeto

pantalla.innerHTML = `<p>Titulo: ${pelicula.titulo}</p>`
pantalla.innerHTML += `<p>Duración: ${pelicula.duración}</p>`
pantalla.innerHTML += `<p>Genero: ${pelicula.genero}</p>`
pantalla.innerHTML += `<p>Año de estreno: ${pelicula.añoestreno}</p>`

// Como mostrar todas las propiedades de un objeto (for.....in)
pantalla.innerHTML += "<h2>Propiedades del objeto</h2>"

let propiedadespelicula;

for(const propiedad in pelicula){
    const valor = pelicula[propiedad]
    propiedadespelicula += `<p>${propiedad}: ${valor}</p>`
}

pantalla.innerHTML += propiedadespelicula

// Agregar una propiedad al objeto

pelicula.estado = true;
pantalla.innerHTML += `<p>Estado: ${pelicula.estado}</p>`

// Modificar una propiedad del objeto

pelicula.estado = false;
pantalla.innerHTML += `<p>Estado: ${pelicula.estado}</p>`