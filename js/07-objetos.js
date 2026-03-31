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
    reproducir:function(){
        console.log(this)
        const texto =`<p class="lead">Comenzo la pelicula ${this.titulo} ▶️</p>`
        console.log("Reproduciendo pelicula");
        return texto;
    },
    stop: function(){
        const texto =`<p class="lead">Se detuvo la pelicula ${this.titulo} ⏸️</p>`
        console.log("Pelicula detenida");
        return texto;
    },
}

console.log(pelicula);
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>${pelicula}</p>`

// Como mostrar las propiedades de un objeto

pantalla.innerHTML += `<p>Titulo: ${pelicula.titulo}</p>`
pantalla.innerHTML += `<p>Duración: ${pelicula.duración}</p>`
pantalla.innerHTML += `<p>Genero: ${pelicula.genero}</p>`
pantalla.innerHTML += `<p>Año de estreno: ${pelicula.añoestreno}</p>`

// Como mostrar todas las propiedades de un objeto (for.....in)
pantalla.innerHTML += "<h2>Propiedades del objeto</h2>"

let propiedadespelicula

for(const propiedad in pelicula){
    if (typeof pelicula[propiedad] !== "function"){
        const valor = pelicula[propiedad]
        propiedadespelicula += `<p>${propiedad}: ${valor}</p>`
    }
}

// Mostrar el tipo de dato de cada propiedad del objeto

console.log(typeof pelicula.titulo);
console.log(typeof pelicula.reproducir);
console.log(typeof pelicula.añoestreno);

pantalla.innerHTML += propiedadespelicula

// Agregar una propiedad al objeto

pelicula.estado = true;
pantalla.innerHTML += `<p>Estado: ${pelicula.estado}</p>`

// Modificar una propiedad del objeto

pelicula.estado = false;
pantalla.innerHTML += `<p>Estado: ${pelicula.estado}</p>`

// Eliminar una propiedad del objeto

delete pelicula.estado;
pantalla.innerHTML += `<p>Estado eliminado: ${pelicula.estado}</p>`
console.log(pelicula);

// Usar los metodos del objeto

pantalla.innerHTML += pelicula.reproducir()

pantalla.innerHTML += pelicula.stop()
console.log(this)