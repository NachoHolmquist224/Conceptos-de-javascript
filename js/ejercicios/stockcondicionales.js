const stock = parseInt(prompt("Ingresa el stock actual"))
const pantalla = document.getElementById ("pantalla")

if(stock > 0){
    pantalla.innerHTML= "<p>Stock disponible</p>"
}
else{
    pantalla.innerHTML= "<p class = 'text-danger fw-bold'>Sin stock</p>"
}