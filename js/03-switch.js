const opcion = parseInt(prompt("Ingrese una opción: 1-Consultar el saldo 2-Ingresar dinero 3-Retirar dinero"));
const pantalla = document.getElementById("pantalla");
let saldo = 10000;


switch (opcion) {
  case 1:
    console.log("Consultar saldo");
    pantalla.innerHTML = `<p>Tu saldo es de $${saldo}</p>`;
    break;
  case 2:
    console.log("Ingresar dinero");
    const ingreso = parseFloat(prompt("Ingrese la cantidad a depositar"));
    saldo += ingreso;
    pantalla.innerHTML = `<p>Tu saldo actual es de $${saldo}</p>`;
    break;
  case 3:
    console.log("Retirar dinero");
    const retiro = parseFloat(prompt("Ingrese la cantidad a retirar"));
    if (retiro > saldo) {
      console.log("Saldo insuficiente");
      pantalla.innerHTML = `<p>Saldo insuficiente</p>`;
    }
    else{
        saldo -= retiro;
        pantalla.innerHTML = `<p>Tu saldo actual es de $${saldo}</p>`;
    }  
    break;
  default:
    console.log("Opción no válida");
    pantalla.innerHTML = `<p>Opción no válida</p>`;
    break;
}
