const num1 = parseInt(prompt("Ingresa tu numero favorito"))
const res = num1 % 2;

if(isNaN(num1)){
    const pantalla = document.getElementById("pantalla")
    pantalla.innerHTML= "<p>No ingresaste un numero</p>"
}
else{
    if(res === 0){
    console.log("El numero es par");
    const pantalla = document.getElementById("pantalla");
    pantalla.innerHTML = `<p>El numero ${num1} es par</p>`;
    }
    else{
    console.log("El numero es impar");
    pantalla.innerHTML = `<p>El numero ${num1} es impar</p>`;
    }
}
   