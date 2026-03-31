const carrito = [{nombre: "Camisa", precio: 20}, {nombre: "Pantalón", precio: 30}, {nombre: "Zapatos", precio: 50}];

//Sumar el total del carrito

const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(carrito);
console.log(total);  