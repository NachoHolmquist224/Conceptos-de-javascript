const pantalla = document.getElementById("pantalla")
// let contador = 1

// while(contador <= 500){
//     pantalla.innerHTML += `<p>Fila ${contador}</p>`
//     contador++;
// }

// do{
//     pantalla.innerHTML += `<p>Fila ${contador}</p>`
//     contador++;
// }
// while(contador <= 500)

for(let contador = 1; contador<=500; contador++){
    pantalla.innerHTML += `<p>Fila ${contador}</p>`
}