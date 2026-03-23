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
    elenco : [actor1, actor2, actor3],    
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